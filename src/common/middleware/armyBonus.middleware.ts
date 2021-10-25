import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

import { randomProbabilities } from 'src/constants';

@Injectable()
export class ArmyBonusMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (Object.keys(req.query).length === 0) {
      throw new HttpException(
        { status: HttpStatus.BAD_REQUEST, error: 'No army data!' },
        HttpStatus.BAD_REQUEST,
      );
    }

    req.body.armies = [];

    Object.values(req.query).forEach((numberOfSoldiers: string) => {
      req.body.armies.push({
        ...(Math.random() < randomProbabilities.ARMY
          ? { hasGeneral: true, hasDisease: false }
          : { hasGeneral: false, hasDisease: true }),
        numberOfSoldiers: Number(numberOfSoldiers),
      });
    });

    next();
  }
}
