import { Module } from '@nestjs/common';
import { SatuanController } from './satuan.controller';
import { SatuanService } from './satuan.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Satuan } from './entities/satuan.entity';
import { SatuanRepository } from './infrastructure/persistence/satuan.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Satuan])], // Add your entity here
  controllers: [SatuanController],
  providers: [SatuanService, SatuanRepository],
  exports: [SatuanService],
})
export class SatuanModule {}
