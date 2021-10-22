import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ArmyBonusMiddleware } from 'src/common/middleware/armyBonus.middleware';
import { EnvironmentBonusMiddleware } from 'src/common/middleware/environmentBonusElement';
import { BattleController } from './battle.controller';
import { BattleService } from './battle.service';

@Module({
  controllers: [BattleController],
  providers: [BattleService],
})
export class ArmiesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ArmyBonusMiddleware, EnvironmentBonusMiddleware)
      .forRoutes('battle');
  }
}
