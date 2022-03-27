import { MongoClient, ObjectId } from 'mongodb';
let url = `mongodb+srv://tinker:${process.env.DB_PASSWORD}@dva-bot.z36uu.mongodb.net/tinker?retryWrites=true&w=majority`;
let mongo = new MongoClient(url);

let users = mongo.db('tinker').collection<User>('users');
let tools = mongo.db('tinker').collection<RemoteTool>('tools');
export default { users, tools };

export interface User {
  username: string;
  password: string;
}

export interface RemoteTool {
  owner: string;
  tool: Tool;
}

export interface Tool {
  name: string;
  description: string;
  type: string;
  parts: {
    [key: string]: { id: number; data: string; part: string };
  };
}

mongo
  .connect()
  .then(() => console.log('Connected to database'))
  .catch((e) => console.log('Failed to connect to database', e.message));
