import { ApiProperty } from '@nestjs/swagger';
import { Column, Decimal128, Entity } from 'typeorm';
import { BaseEntity } from '../../../base/base_entity.entity';

@Entity('currency')
export class Currency extends BaseEntity {
  @ApiProperty({
    type: String,
    example: 'USD',
  })
  @Column({ type: 'varchar', length: 255 })
  name: string;
  @ApiProperty({
    type: String,
    example: '$',
  })
  @Column({ type: 'varchar', length: 255 })
  symbol: string;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  rate: Decimal128;
  @ApiProperty({
    type: Boolean,
    example: 'True',
  })
  @Column({ type: 'boolean', default: 'True' })
  is_base: boolean;
}
