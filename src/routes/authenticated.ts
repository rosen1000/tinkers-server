import { Tool } from '../db/database';
import { TokenData } from './../utils/index';
import { FastifyInstance, FastifyRequest } from 'fastify';
import db from '../db/database';

export default (app: FastifyInstance) => {
  app.post('/tool', async (req: AddToolRequest, res) => {
    let token = (await req.jwtVerify()) as TokenData;
    let tool = req.body as any;

    if (!('type' in req.body) || !('parts' in req.body))
      return { error: 'This is not an Item object' };

    // @ts-ignore
    db.tools.insertOne({ owner: token.sub, tool });
    res.send({ message: 'Done' });
  });

  app.get('/tool', async (req: GetToolRequest, res) => {
    // req.jwtVerify();
    try {
      let ownerID = req.query.owner;
      let type = req.query.type;
      let search = {};
      if (ownerID) search['owner'] = ownerID;
      if (type) search['tool.type'] = type;
      db.tools.aggregate([
        { $match: search },
        {
          $lookup: {
            from: 'users',
            localField: 'owner',
            foreignField: 'username',
            as: 'owner_doc',
          },
        },
      ]);
      let toolsCursor = db.tools.find(search).map((doc) => {
        return { owner: doc.owner, description: '', tool: doc.tool };
      });
      res.send(await toolsCursor.toArray());
    } catch (e) {
      console.error(e);
    }
  });
};

type AddToolRequest = FastifyRequest<{ Body?: Tool }>;
type GetToolRequest = FastifyRequest<{
  Querystring?: { owner: string; type: string };
}>;
