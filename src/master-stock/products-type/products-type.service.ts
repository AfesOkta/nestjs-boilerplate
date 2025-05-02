import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base_service.service';
import { ProductType } from './entities/products-type.entity';
import { ProductsTypeRepository } from './infrastructure/persistence/products-type.repository';
import { CreatedProductTypeDto } from './dto/created-product-type.dto';
import { UpdatedProductTypeDto } from './dto/updated-product-type.dto';

@Injectable()
export class ProductsTypeService extends BaseService<ProductType> {
  constructor(private readonly productTypeRepository: ProductsTypeRepository) {
    super(productTypeRepository);
  }

  create(createProductTypeDto: CreatedProductTypeDto): Promise<ProductType> {
    return this.productTypeRepository.createEntity({
      name: createProductTypeDto.name,
      createdBy: createProductTypeDto.createdBy,
      createdAt: createProductTypeDto.createdAt,
    });
  }
  findAll(): Promise<ProductType[]> {
    return this.productTypeRepository.findAll();
  }
  findOne(id: number): Promise<ProductType> {
    return this.productTypeRepository
      .findOne({ where: { id } })
      .then((ProductType) => {
        if (!ProductType) {
          throw new Error(`ProductType with ID ${id} not found`);
        }
        return ProductType;
      });
  }
  update(
    id: number,
    updateProductTypeDto: UpdatedProductTypeDto,
  ): Promise<ProductType> {
    return this.productTypeRepository
      .update(id, updateProductTypeDto)
      .then(() => {
        return this.findOne(id);
      });
  }
  remove(id: number): Promise<void> {
    return this.findOne(id).then((ProductType) => {
      return this.productTypeRepository
        .remove(ProductType)
        .then(() => undefined);
    });
  }
}
