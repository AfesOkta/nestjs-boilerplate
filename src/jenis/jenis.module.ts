import { Module } from '@nestjs/common';
import { JenisController } from './jenis.controller';
import { JenisService } from './jenis.service';

@Module({
  controllers: [JenisController],
  providers: [JenisService]
})
export class JenisModule {}
