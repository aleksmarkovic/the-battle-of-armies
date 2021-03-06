import { Test, TestingModule } from '@nestjs/testing';
import { BattleService } from './battle.service';

describe('BattleService', () => {
  let service: BattleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BattleService],
    }).compile();

    service = await module.resolve<BattleService>(BattleService);
  });

  describe('findAll', () => {
    it('should return array of armies', async () => {
      const result = [
        {
          id: 1,
          hasGeneral: false,
          hasDisease: true,
          numberOfSoldiers: 50,
        },
        {
          id: 2,
          hasGeneral: true,
          hasDisease: false,
          numberOfSoldiers: 45,
        },
      ];

      jest.spyOn(service, 'findAll').mockImplementation(() => result);
    });
  });
});
