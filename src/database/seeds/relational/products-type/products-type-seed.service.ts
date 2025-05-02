import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductType } from '../../../../master-stock/products-type/entities/products-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductTypeSeedService {
  constructor(
    @InjectRepository(ProductType)
    private repository: Repository<ProductType>,
  ) {}

  async run() {
    await this.repository.save(
      this.repository.create({
        name: 'Goods',
        createdBy: 1,
      }),
    );

    await this.repository.save(
      this.repository.create({
        name: 'Service',
        createdBy: 1,
      }),
    );

    await this.repository.save(
      this.repository.create({
        name: 'Digital Service',
        createdBy: 1,
      }),
    );

    await this.repository.save(
      this.repository.create({
        name: 'Experiential Products',
        createdBy: 1,
      }),
    );

    await this.repository.save(
      this.repository.create({
        name: 'Subscription-Based Products',
        createdBy: 1,
      }),
    );

    await this.repository.save(
      this.repository.create({
        name: 'Financial Products',
        createdBy: 1,
      }),
    );

    await this.repository.save(
      this.repository.create({
        name: 'Utility',
        createdBy: 1,
      }),
    );
  }
}
