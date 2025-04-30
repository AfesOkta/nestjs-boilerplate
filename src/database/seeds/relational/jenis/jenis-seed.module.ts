import { Module } from '@nestjs/common';
import { JenisSeedService } from './jenis-seed.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jenis } from '../../../../master-stock/jenis/entities/jenis.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Jenis])],
  providers: [JenisSeedService],
  exports: [JenisSeedService],
})
export class JenisSeedModule {}
