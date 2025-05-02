import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../base/base_entity.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('products_type')
export class ProductType extends BaseEntity {
  @ApiProperty({
    type: String,
    example: 'Merek A',
  })
  @Column({ type: 'varchar', length: 255 })
  name: string;
}
