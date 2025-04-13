import { Module } from '@nestjs/common';
import { CabangService } from './cabang.service';
import { CabangController } from './cabang.controller';

@Module({
  controllers: [CabangController],
  providers: [CabangService],
})
export class CabangModule {}
