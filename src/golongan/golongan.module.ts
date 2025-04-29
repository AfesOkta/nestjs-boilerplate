import { Module } from '@nestjs/common';
import { GolonganController } from './golongan.controller';
import { GolonganService } from './golongan.service';
import { GolonganRepository } from './infrastructure/golongan.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Golongan } from './entities/golongan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Golongan])],
  controllers: [GolonganController],
  providers: [GolonganService, GolonganRepository],
  exports: [GolonganService],
})
export class GolonganModule {}
