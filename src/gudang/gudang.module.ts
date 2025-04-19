import { Module } from '@nestjs/common';
import { GudangController } from './gudang.controller';
import { GudangService } from './gudang.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gudang } from './entities/gudang.entity';
import { GudangRepository } from './infrastructure/persistence/gudang.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Gudang])], // Add your entity here
  controllers: [GudangController],
  providers: [GudangService, GudangRepository],
  exports: [GudangService], // Export the service and repository if needed
})
export class GudangModule {}
