import { pointsCoefficients } from '../constants';

import { Army } from 'src/interfaces/army.interface';
import { BattleService } from '../battle/battle.service';

const clashArmies = (armies: Army[], battleService: BattleService) => {
  const armyPoints = {};
  const environmentDisaster = battleService.getEnvironmentDisaster();

  Object.values(armies).forEach((army) => {
    armyPoints[army.id] = army.numberOfSoldiers * pointsCoefficients.soldier;

    armyPoints[army.id] = army?.hasGeneral
      ? armyPoints[army.id] * pointsCoefficients.hasGeneral
      : armyPoints[army.id];
    armyPoints[army.id] = army?.hasDisease
      ? armyPoints[army.id] * pointsCoefficients.hasDisease
      : armyPoints[army.id];

    if (environmentDisaster) {
      armyPoints[army.id] =
        armyPoints[army.id] * pointsCoefficients[environmentDisaster];
    }
  });

  return {
    army: armies.sort(
      (firstArmy, secondArmy) =>
        armyPoints[secondArmy.id] - armyPoints[firstArmy.id],
    )[0],
    environmentDisaster,
  };
};

export default (battleService: BattleService) => {
  const armies = battleService.findAll();

  const winningArmy = clashArmies(armies, battleService);

  return winningArmy;
};
