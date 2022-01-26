import { Tool, User, ToolRemote } from './db/interfaces';
import knex from './db/database';
import Fastify from 'fastify';
const app = Fastify();

app.register(import('fastify-raw-body'), { field: 'rawBody' });
app.register(import('fastify-multipart'), { addToBody: true });
app.register(import('fastify-formbody'));
app.register(import('fastify-cors'));

app.get('/', (req, res) => {
    res.send('ok');
});

app.post('/tool', async (req, res) => {
    let pull = await knex<ToolRemote>('tools')
        .select('json')
        .where('id', req.query['id'])
        .first();
    res.send(JSON.parse(pull.json));
});

app.post('/new-tool', async (req, res) => {
    await knex('tools').insert({json: JSON.stringify(req.body)});
    res.send('ok');
});

app.listen(8080, (e) => {
    if (e) return console.error(e);
    console.log('Listening on http://localhost:8080');
});

// (async () => {
//     // await knex('tools').insert({ json: JSON.stringify({ type: 'pickaxe', parts: [{material: "wood"}]}) });
//     let pull = await knex<ToolRemote>('tools').first();
//     let pull2 = JSON.parse(pull.json) as Tool;
//     console.log(pull2);
// })();
