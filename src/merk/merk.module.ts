import { Module } from '@nestjs/common';
import { MerkController } from './merk.controller';
import { MerkService } from './merk.service';

@Module({
  controllers: [MerkController],
  providers: [MerkService]
})
export class MerkModule {}
