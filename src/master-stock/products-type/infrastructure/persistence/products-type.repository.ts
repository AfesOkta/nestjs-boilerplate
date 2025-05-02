import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../../../base/base_repository.repository';
import { ProductType } from '../../entities/products-type.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class ProductsTypeRepository extends BaseRepository<ProductType> {
  constructor(private dataSource: DataSource) {
    super(ProductType, dataSource);
  }

  async findByName(name: string): Promise<ProductType | null> {
    const productType = await this.findOne({
      where: {
        name: name,
      },
    });
    return productType;
  }
}
