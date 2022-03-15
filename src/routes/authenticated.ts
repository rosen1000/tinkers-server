import { TokenData } from './../utils/index';
import { FastifyInstance, FastifyRequest } from 'fastify';
import db from '../db/database';

export default (app: FastifyInstance) => {
  app.post('/tool', async (req: AddToolRequest, res) => {
    let token = (await req.jwtVerify()) as TokenData;
    let tool = req.body.tool;

    db.tools.insertOne({ owner: token.id, tool });
    res.send({ message: 'done' });
  });

  app.get('tool', async (req: GetToolRequest, res) => {
    req.jwtVerify();
    // @ts-ignore
    let ownerID = req.query.owner;
    if (ownerID) {
      // TODO: Send all tools of given owner
    }
    let tools = db.tools.find();
    res.send(tools);
  });
};

type AddToolRequest = FastifyRequest<{ Body: { tool: any } }>;
type GetToolRequest = FastifyRequest<{ Params: { owner: string } }>;
