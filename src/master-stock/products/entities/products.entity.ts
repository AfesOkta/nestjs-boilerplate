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
  @Column({ type: 'varchar', length: 255 })
  product_name: string;

  @ApiProperty({
    type: Boolean,
    example: 'True',
  })
  @Column({ type: 'boolean', default: 'True' })
  is_active: boolean;
}
