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

    controller = module.get<BattleController>(BattleController);
  });

  describe('create', () => {
    it('should return object', async () => {
      expect(
        await controller.create({
          armies: [
            { general: false, disease: true, numberOfSoldiers: 50 },
            { general: true, disease: false, numberOfSoldiers: 45 },
          ],
          environmentBonusElement: 'earthquake',
        }),
      ).toStrictEqual({
        army: {
          id: 2,
          general: true,
          disease: false,
          numberOfSoldiers: 45,
        },
        environmentDisaster: 'earthquake',
      });
    });
  });
});
