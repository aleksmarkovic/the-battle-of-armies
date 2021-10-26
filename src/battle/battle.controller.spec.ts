import { Test, TestingModule } from '@nestjs/testing';
import { BattleController } from './battle.controller';
import { BattleService } from './battle.service';

describe('BattleController', () => {
  let controller: BattleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BattleController],
      providers: [BattleService],
    }).compile();

    controller = await module.resolve<BattleController>(BattleController);
  });

  describe('create', () => {
    it('should return winning army object', async () => {
      expect(
        await controller.create({
          armies: [
            { hasGeneral: false, hasDisease: true, numberOfSoldiers: 50 },
            { hasGeneral: true, hasDisease: false, numberOfSoldiers: 45 },
          ],
          environmentBonusElement: 'earthquake',
        }),
      ).toStrictEqual({
        army: {
          id: 2,
          hasGeneral: true,
          hasDisease: false,
          numberOfSoldiers: 45,
        },
        environmentDisaster: 'earthquake',
      });
    });
  });
});
