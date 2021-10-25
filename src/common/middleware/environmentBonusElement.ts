import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

import { randomProbabilities } from 'src/constants';

const BONUS_ELEMENT_SPAWN_PROBABILITY = 0.5;

@Injectable()
export class EnvironmentBonusMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const bonusElement =
      Math.random() < BONUS_ELEMENT_SPAWN_PROBABILITY ? true : false;

    if (bonusElement) {
      req.body.environmentBonusElement =
        Math.random() < randomProbabilities.ENVIRONMENT
          ? 'earthquake'
          : 'dragon';
    }

    next();
  }
}
