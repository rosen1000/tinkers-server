import db from './db/database';
import { compareSync, hashSync } from 'bcrypt';
import Fastify, { FastifyRequest } from 'fastify';
import router from './routes';
import { generateToken } from './utils';
const app = Fastify({logger: false});

router(app);

const jwtOptions = {
  secret: 'obicham_banica',
};

app.register(import('fastify-jwt'), { ...jwtOptions });
app.register(import('fastify-cors'));

app.get('/', async (req, res) => {
  let data = await req.jwtVerify();
  res.send(data);
});

app.post('/register', async (req: RegisterRequest, res) => {
  let username = req.body['username'];
  let password = req.body['password'];
  if (!username) return { error: 'Username is required' };
  if (!password) return { error: 'Password is required' };

  let pick = await db.users.findOne({ username });
  if (pick) return { error: 'User already exists' };

  password = hashSync(password, 8);
  let user = await db.users.insertOne({ username, password });

  return res.send(generateToken(app, {
    id: user.insertedId,
    sub: username,
    iat: Date.now(),
  }));
});

app.post('/login', async (req, _res) => {
  let username = req.body['username'];
  let password = req.body['password'];

  let pick = await db.users.findOne({ username });
  if (!pick) return { error: 'Wrong username or password' };
  if (!compareSync(password, pick.password))
    return { error: 'Wrong username or password' };

  return app.jwt.sign({ id: pick._id, sub: username, iat: Date.now() });
});

app.listen(8081, (e, address) => {
  if (e) return console.error(e);
  console.log(`Listening on ${address}`);
});

type RegisterRequest = FastifyRequest<{
  Body: { username?: string; password?: string };
}>;
