import { FastifyInstance } from 'fastify';
export function generateToken(app: FastifyInstance, data: TokenData) {
    app.jwt.sign(data);
}

export interface TokenData {
    sub: string,
    iat: number,
    [key: string]: string | any
}
