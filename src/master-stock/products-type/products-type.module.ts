import { Module } from '@nestjs/common';
import { ProductsTypeController } from './products-type.controller';
import { ProductsTypeService } from './products-type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductType } from './entities/products-type.entity';
import { ProductsTypeRepository } from './infrastructure/persistence/products-type.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ProductType])],
  controllers: [ProductsTypeController],
  providers: [ProductsTypeService, ProductsTypeRepository],
  exports: [ProductsTypeService],
})
export class ProductsTypeModule {}
