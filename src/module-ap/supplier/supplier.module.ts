import { Module } from '@nestjs/common';
import { SupplierController } from './supplier.controller';
import { Pemasok } from './entities/supplier.entity';
import { PemasokRepository } from './infrastructure/persistence/supplier.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PemasokService } from './supplier.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pemasok])],
  controllers: [SupplierController],
  providers: [PemasokService, PemasokRepository],
  exports: [PemasokService],
})
export class SupplierModule {}
