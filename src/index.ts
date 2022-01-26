import { User } from './db/interfaces';
import knex from './db/database';
import Fastify from 'fastify';
const app = Fastify();

app.addContentTypeParser(
    'application/json',
    { parseAs: 'string' },
    (req, body, done) => {
        console.log('json');
        try {
            const json = JSON.parse(body.toString());
            done(null, json);
        } catch (e) {
            e.statusCode = 400;
            done(e, null);
        }
    }
);

app.register(import('fastify-raw-body'), { field: 'rawBody' });
app.register(import('fastify-multipart'), { addToBody: true });
app.register(import('fastify-formbody'))
app.register(import('fastify-cors'));

app.get('/', (req, res) => {
    res.send('ok');
});

app.get('/tool', (req, res) => {
    console.log(req.body, req.rawBody, req.headers['content-type']);
    res.send('ok');
});

app.listen(8080, (e) => {
    if (e) return console.error(e);
    console.log('Listening on http://localhost:8080');
});
