import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../base/base_entity.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('products')
export class Product extends BaseEntity {
  @ApiProperty({
    type: String,
    example: 'PG00001',
  })
  @Column({ type: 'varchar', length: 25 })
  product_code: string;

  @ApiProperty({
    type: String,
    example: 'Indomie Special',
  })
  @Column({ type: 'varchar', length: 250 })
  product_name: string;

  @ApiProperty({
    type: String,
    example: 'Indomie Special',
  })
  @Column({ type: 'varchar', length: 100 })
  product_barcode: string;

  @ApiProperty({
    type: Number,
    example: 1,
  })
  @Column({ type: 'int' })
  product_type: number;

  @ApiProperty({
    type: Number,
    example: 1,
  })
  @Column({ type: 'int' })
  product_unit: number;

  @ApiProperty({
    type: Number,
    example: 2000,
  })
  @Column({ type: 'decimal', precision: 10, scale: 0 })
  product_purchase_price: number;

  @ApiProperty({
    type: Number,
    example: 3000,
  })
  @Column({ type: 'decimal', precision: 10, scale: 0 })
  product_sales_price: number;

  @ApiProperty({
    type: Number,
    example: 1000,
  })
  @Column({ type: 'decimal', precision: 10, scale: 0 })
  product_margin: number;

  @ApiProperty({
    type: Number,
    example: 1000,
  })
  @Column({ type: 'decimal', precision: 10, scale: 0 })
  product_cogs: number;

  @ApiProperty({
    type: Boolean,
    example: 'True',
  })
  @Column({ type: 'boolean', default: 'True' })
  is_active: boolean;
}
