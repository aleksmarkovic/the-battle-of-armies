import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ArmyBonusMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    req.body.armies = [];

    Object.values(req.query).forEach((numberOfSoldiers: string) => {
      req.body.armies.push({
        ...(Math.random() < 0.7
          ? { general: true, disease: false }
          : { general: false, disease: true }),
        numberOfSoldiers: Number(numberOfSoldiers),
      });
    });

    next();
  }
}
