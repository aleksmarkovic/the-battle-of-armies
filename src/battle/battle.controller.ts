import { Body, Controller, Get } from '@nestjs/common';
import { BattleService } from './battle.service';

@Controller('battle')
export class BattleController {
  constructor(private battleService: BattleService) {}

  @Get()
  create(@Body() body) {
    this.battleService.createArmy(body.armies);
    this.battleService.createEnvironmentDisaster(body.environmentBonusElement);

    const winner = this.battleService.initBattle();

    return winner;
  }
}
