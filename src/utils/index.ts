import { ObjectId } from 'mongodb';
import { FastifyInstance } from 'fastify';
export function generateToken(app: FastifyInstance, data: TokenData) {
    return app.jwt.sign(data);
}

export const getToolLength = (toolType: string) => {
  switch (toolType) {
    case 'cleaver':
    case 'excavator':
    case 'vein_hammer':
    case 'sledge_hammer':
    case 'scythe':
    case 'broad_axe':
      return 4;
    case 'sword':
    case 'kama':
    case 'hand_axe':
    case 'pickaxe':
    case 'mattock':
      return 3;
    case 'dagger':
      return 2;
  }
};

export interface TokenData {
    id: ObjectId
    sub: string,
    iat: number,
    [key: string]: string | any
}
