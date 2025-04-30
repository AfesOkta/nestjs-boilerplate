import { Module } from '@nestjs/common';
import { GolonganSeedService } from './golongan-seed.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Golongan } from '../../../../master-stock/golongan/entities/golongan.entity';

@Module({
  providers: [GolonganSeedService],
  exports: [GolonganSeedService],
  imports: [TypeOrmModule.forFeature([Golongan])], // Add your Golongan entity here
})
export class GolonganSeedModule {}
