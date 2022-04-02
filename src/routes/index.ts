import { ObjectId } from 'mongodb';
import { getToolLength } from './../utils/index';
import { Tool } from '../db/database';
import { TokenData } from '../utils/index';
import { FastifyInstance, FastifyRequest } from 'fastify';
import db from '../db/database';

const PAGE_SIZE = 5;

export default (app: FastifyInstance) => {
  app.get('/tool', async (req: GetToolRequest, res) => {
    try {
      let owner = req.query.owner;
      let type = req.query.type;
      let id = req.query.id;
      let page = +req.query.page || 1;
      let search = {};
      if (owner) search['owner.id'] = owner;
      if (type && type != 'all') search['tool.type'] = type;
      if (id) search['_id'] = new ObjectId(id);

      let toolsCursor = db.tools
        .find(search)
        .skip((page - 1) * PAGE_SIZE)
        .limit(PAGE_SIZE)
        .map((doc) => ({
          id: doc._id,
          name: doc.tool.name,
          description: doc.tool.description,
          owner: doc.owner,
          tool: doc.tool,
        }));
      res.send(await toolsCursor.toArray());
    } catch (e) {
      console.error(e);
    }
  });

  app.post('/tool', async (req: PostToolRequest, res) => {
    let token = (await req.jwtVerify()) as TokenData;
    let tool = req.body;

    if (
      !('type' in tool) ||
      !('parts' in tool) ||
      !('name' in tool) ||
      !('description' in tool)
    )
      return { error: 'This is not an Item object' };

    // @ts-expect-error
    delete tool.completed;

    if (Object.keys(req.body.parts).length != getToolLength(req.body.type))
      return { error: 'Build the whole tool' };

    db.tools.insertOne({
      owner: { id: token.id.toString(), name: token.sub },
      tool,
    });
    res.send({ message: 'Done' });
  });

  app.patch('/tool', async (req: PatchToolRequest, res) => {
    let token = (await req.jwtVerify()) as TokenData;
    let tool = req.body;

    if (
      !('type' in tool) ||
      !('parts' in tool) ||
      !('name' in tool) ||
      !('description' in tool) ||
      !('id' in tool)
    )
      return { error: 'This is not an Item object' };

    // @ts-expect-error
    delete tool.completed;

    if (Object.keys(req.body.parts).length != getToolLength(req.body.type))
      return { error: 'Build the whole tool' };

    db.tools.updateOne(
      { _id: new ObjectId(tool.id), 'owner.id': token.id.toString() },
      { $set: { tool } }
    );

    res.send({ message: 'Done' })
  });

  app.head('/tool', async (req: HeadToolRequest, res) => {
    let owner = req.query.owner;
    let type = req.query.type;
    let search = {};

    if (owner) search['owner'] = owner;
    if (type && type != 'all') search['tool.type'] = type;
    let counted = await db.tools.countDocuments(search);

    res.send({ pages: Math.ceil(counted / PAGE_SIZE) });
  });

  app.delete('/tool', async (req: DeleteToolRequest, res) => {
    let id = req.query.id;
    console.log(id);

    let results = await db.tools.deleteOne({ _id: new ObjectId(id) });
    if (results.deletedCount == 1) return res.send({ message: 'Done' });
    return res.send({ error: 'Not found' });
  });
};

interface ToolPatch extends Tool {
  id: string;
}

type GetToolRequest = FastifyRequest<{
  Querystring?: { owner: string; type: string; page: string; id: string };
}>;
type PostToolRequest = FastifyRequest<{ Body?: Tool }>;
type PatchToolRequest = FastifyRequest<{ Body?: ToolPatch }>;
type HeadToolRequest = FastifyRequest<{
  Querystring?: { type: string; owner: string };
}>;
type DeleteToolRequest = FastifyRequest<{ Querystring?: { id: string } }>;
