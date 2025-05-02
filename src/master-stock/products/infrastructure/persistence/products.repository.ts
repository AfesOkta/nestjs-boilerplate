import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../../../base/base_repository.repository';
import { Product } from '../../entities/products.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class ProductRepository extends BaseRepository<Product> {
  constructor(private dataSource: DataSource) {
    super(Product, dataSource);
  }
}
