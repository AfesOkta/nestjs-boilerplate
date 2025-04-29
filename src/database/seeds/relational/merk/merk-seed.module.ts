import { Module } from '@nestjs/common';
import { MerkSeedService } from './merk-seed.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Merk } from '../../../../merk/enitites/merk.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Merk])],
  providers: [MerkSeedService],
  exports: [MerkSeedService],
})
export class MerkSeedModule {}
