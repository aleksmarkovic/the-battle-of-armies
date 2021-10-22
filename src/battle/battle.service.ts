import { Injectable } from '@nestjs/common';

import { Army } from '../interfaces/army.interface';
import battle from '../common/battle';

@Injectable()
export class BattleService {
  private armies: Army[] = [];
  private environmentDisaster: string;

  createArmy(armyData: Army[]) {
    armyData.forEach((army: Army) =>
      this.armies.push({
        id: this.armies.length + 1,
        ...army,
      }),
    );
  }

  createEnvironmentDisaster(environmentDisaster: string) {
    this.environmentDisaster = environmentDisaster;
  }

  findAll(): Army[] {
    return this.armies;
  }

  initBattle() {
    return battle(this);
  }

  getEnvironmentDisaster(): string {
    return this.environmentDisaster;
  }

  reset() {
    this.armies = [];
    this.environmentDisaster = undefined;
  }
}
