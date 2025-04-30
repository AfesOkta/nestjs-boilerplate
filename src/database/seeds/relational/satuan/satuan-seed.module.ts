import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SatuanSeedService } from './satuan-seed.service';
import { Satuan } from '../../../../master-stock/satuan/entities/satuan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Satuan])],
  providers: [SatuanSeedService],
  exports: [SatuanSeedService],
})
export class SatuanSeedModule {}
