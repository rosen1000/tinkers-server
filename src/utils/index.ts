import { ObjectId } from 'mongodb';
import { FastifyInstance } from 'fastify';
export function generateToken(app: FastifyInstance, data: TokenData) {
    return app.jwt.sign(data);
}

export interface TokenData {
    id: ObjectId
    sub: string,
    iat: number,
    [key: string]: string | any
}
