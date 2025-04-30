import { Module } from '@nestjs/common';
import { JenisController } from './jenis.controller';
import { JenisService } from './jenis.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jenis } from './entities/jenis.entity';
import { JenisRepository } from './infrastructure/persistence/jenis.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Jenis])],
  controllers: [JenisController],
  providers: [JenisService, JenisRepository],
  exports: [JenisService],
})
export class JenisModule {}
