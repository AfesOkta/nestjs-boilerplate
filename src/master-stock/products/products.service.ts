import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base_service.service';
import { Product } from './entities/products.entity';
import { ProductRepository } from './infrastructure/persistence/products.repository';
import { CreatedProductDto } from './dto/created-product.dto';
import { UpdatedProductDto } from './dto/updated-product.dto';

@Injectable()
export class ProductsService extends BaseService<Product> {
  constructor(private readonly productRepository: ProductRepository) {
    super(productRepository);
  }

  create(createProductDto: CreatedProductDto): Promise<Product> {
    return this.productRepository.createEntity({
      product_code: createProductDto.product_code,
      product_name: createProductDto.product_name,
      product_barcode: createProductDto.product_barcode,
      product_type: createProductDto.product_type,
      product_unit: createProductDto.product_unit,
      product_purchase_price: createProductDto.product_purchase_price,
      product_sales_price: createProductDto.product_sales_price,
      product_margin: createProductDto.product_margin,
      product_cogs: createProductDto.product_cogs,
      is_active: createProductDto.is_active,
      createdBy: createProductDto.createdBy,
      createdAt: createProductDto.createdAt,
    });
  }
  findAll(): Promise<Product[]> {
    return this.productRepository.findAll();
  }
  findOne(id: number): Promise<Product> {
    return this.productRepository.findOne({ where: { id } }).then((Product) => {
      if (!Product) {
        throw new Error(`Product with ID ${id} not found`);
      }
      return Product;
    });
  }
  update(id: number, updateProductDto: UpdatedProductDto): Promise<Product> {
    return this.productRepository.update(id, updateProductDto).then(() => {
      return this.findOne(id);
    });
  }
  remove(id: number): Promise<void> {
    return this.findOne(id).then((Product) => {
      return this.productRepository.remove(Product).then(() => undefined);
    });
  }
}
