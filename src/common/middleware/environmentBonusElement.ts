import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class EnvironmentBonusMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const bonusElement = Math.random() < 0.5 ? true : false;

    if (bonusElement) {
      req.body.environmentBonusElement =
        Math.random() < 0.5 ? 'earthquake' : 'dragon';
    }

    next();
  }
}
