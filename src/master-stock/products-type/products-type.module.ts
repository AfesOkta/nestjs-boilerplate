import { Module } from '@nestjs/common';
import { ProductsTypeController } from './products-type.controller';
import { ProductsTypeService } from './products-type.service';

@Module({
  controllers: [ProductsTypeController],
  providers: [ProductsTypeService]
})
export class ProductsTypeModule {}
