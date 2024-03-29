import { Request, Response, NextFunction, request} from 'express';
import { verify } from 'jsonwebtoken';

import AppError from '../errors/AppError';

import authConfig from '../config/auth';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(req: Request, res: Response, next: NextFunction): void {

  // validação token JWT

  const authHeader = req.headers.authorization;

  if(!authHeader) {
    throw new AppError('JWT token is missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { sub } = decoded as TokenPayload;

    req.user = {
      id: sub
    }

    console.log(decoded);
    return next();
  } catch {
    throw new AppError('invalid JWT token', 401);
  }
}
