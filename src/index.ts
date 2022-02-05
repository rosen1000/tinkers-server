import { User, ToolRemote } from './db/interfaces';
import knex from './db/database';
import { compareSync, hashSync } from 'bcrypt';
import Fastify from 'fastify';
import router from './routes/authenticated';
import { generateToken } from './utils';
const app = Fastify();

router(app);

const jwtOptions = {
    secret: 'obicham_banica',
    // requires fastify-cookie
    // cookie: { cookieName: 'identifier' },
};

app.register(import('fastify-raw-body'), { field: 'rawBody' });
app.register(import('fastify-multipart'), { addToBody: true });
app.register(import('fastify-jwt'), { ...jwtOptions });
app.register(import('fastify-formbody'));
app.register(import('fastify-cookie'));
app.register(import('fastify-cors'));

app.get('/', async (req, res) => {
    let data = await req.jwtVerify();
    res.send(data);
});

app.put('/register', async (req, _res) => {
    const username = req.body['username'];
    const password = req.body['password'];

    let exists = await knex<User>('users')
        .select('*')
        .where('username', username)
        .first();
    if (exists) return { error: 'User already exists' };

    let id = await knex<User>('users').insert({
        username,
        password: hashSync(password, 8),
    });

    return generateToken(app, {
        id: id[0],
        sub: username,
        iat: Date.now(),
    });
});

app.post('/login', async (req, _res) => {
    let username = req.body['username'];
    let password = req.body['password'];

    let pick = await knex<User>('users')
        .select('password')
        .where('username', username)
        .first();
    if (pick == null) return { error: 'Wrong username or password' };
    if (!compareSync(password, pick.password))
        return { error: 'Wrong username or password' };

    return app.jwt.sign({ sub: username, iat: Date.now() });
});

// TODO: move to authenticated.ts

// app.post('/tool', async (req, res) => {
//     let pull = await knex<ToolRemote>('tools')
//         .select('json')
//         .where('id', req.query['id'])
//         .first();
//     res.send(JSON.parse(pull.json));
// });

// app.post('/new-tool', async (req, res) => {
//     await knex('tools').insert({ json: JSON.stringify(req.body) });
//     res.send('ok');
// });

app.listen(8081, (e, address) => {
    if (e) return console.error(e);
    console.log(`Listening on ${address}`);
});
