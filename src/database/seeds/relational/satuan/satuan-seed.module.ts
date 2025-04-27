import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SatuanSeedService } from './satuan-seed.service';
import { Satuan } from '../../../../satuan/entities/satuan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Satuan])],
  providers: [SatuanSeedService],
  exports: [SatuanSeedService],
})
export class SatuanSeedModule {}
