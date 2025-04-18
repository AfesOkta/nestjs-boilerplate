import { Module } from '@nestjs/common';
import { CabangService } from './cabang.service';
import { CabangController } from './cabang.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cabang } from './entities/cabang.entity';
import { CabangRepository } from './infrastructure/persistence/cabang.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Cabang])], // Add your entity here
  controllers: [CabangController],
  providers: [CabangService, CabangRepository],
  exports: [CabangService], // Export the service and repository if needed
})
export class CabangModule {}
