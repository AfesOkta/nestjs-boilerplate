import { Module } from '@nestjs/common';
import { ProductTypeSeedService } from './products-type-seed.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductType } from '../../../../master-stock/products-type/entities/products-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductType])],
  providers: [ProductTypeSeedService],
  exports: [ProductTypeSeedService],
})
export class ProductsTypeSeedModule {}
