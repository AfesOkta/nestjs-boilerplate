import { Module } from '@nestjs/common';
import { PelangganController } from './pelanggan.controller';
import { PelangganService } from './pelanggan.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pelanggan } from './entities/pelanggan.entity';
import { PelangganRepository } from './infrastructure/persistence/pelanggan.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Pelanggan])],
  controllers: [PelangganController],
  providers: [PelangganService, PelangganRepository],
  exports: [PelangganService],
})
export class PelangganModule {}
