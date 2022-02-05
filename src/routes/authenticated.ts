import { TokenData } from './../utils/index';
import { ToolRemote } from './../db/interfaces';
import { FastifyInstance } from 'fastify';
import knex from '../db/database';

export default (app: FastifyInstance) => {
    app.post('/add-tool', async (req, res) => {
        let token = (await req.jwtVerify()) as TokenData;
        knex<ToolRemote>('tools').insert({
            owner: token.id,
            json: JSON.stringify(req.body),
        });
        res.send(token);
    });
};
