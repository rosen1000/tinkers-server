import { MongoClient, ObjectId } from 'mongodb';
let url = `mongodb+srv://tinker:${process.env.DB_PASSWORD}@dva-bot.z36uu.mongodb.net/tinker?retryWrites=true&w=majority`;
let mongo = new MongoClient(url);

let users = mongo.db('tinker').collection<User>('users');
let tools = mongo.db('tools').collection<Tool>('tools');
export default { users, tools };

interface User {
  username: string;
  password: string;
}

interface Tool {
  owner: ObjectId;
  tool: {
    type: string;
    parts: {
      material: string;
    }[];
  };
  [key: string]: any;
}

mongo.connect();
