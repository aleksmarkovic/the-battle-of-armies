import { Test, TestingModule } from '@nestjs/testing';
import { BattleService } from './battle.service';

describe('BattleService', () => {
  let service: BattleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BattleService],
    }).compile();

    service = module.get<BattleService>(BattleService);
  });

  describe('findAll', () => {
    it('should return object', async () => {
      const result = [
        {
          id: 1,
          general: false,
          disease: true,
          numberOfSoldiers: 50,
        },
        {
          id: 2,
          general: true,
          disease: false,
          numberOfSoldiers: 45,
        },
      ];

      jest.spyOn(service, 'findAll').mockImplementation(() => result);
    });
  });
});
