import { Module } from '@nestjs/common';
import { SatuanController } from './satuan.controller';
import { SatuanService } from './satuan.service';

@Module({
  controllers: [SatuanController],
  providers: [SatuanService]
})
export class SatuanModule {}
