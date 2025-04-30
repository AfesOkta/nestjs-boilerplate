import { Module } from '@nestjs/common';
import { MerkController } from './merk.controller';
import { MerkService } from './merk.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Merk } from './enitites/merk.entity';
import { MerkRepository } from './infrastructure/persistence/merk.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Merk])],
  controllers: [MerkController],
  providers: [MerkService, MerkRepository],
  exports: [MerkService],
})
export class MerkModule {}
