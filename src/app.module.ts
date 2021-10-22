import { Module } from '@nestjs/common';
import { ArmiesModule } from './battle/battle.module';

@Module({
  imports: [ArmiesModule],
})
export class AppModule {}
