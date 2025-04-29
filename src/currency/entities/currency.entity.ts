import { BaseEntity } from '../../base/base_entity.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';

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
  @ApiProperty({
    type: Number,
    example: 1,
  })
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  rate: number;
  @ApiProperty({
    type: Boolean,
    example: 'True',
  })
  @Column({ type: 'boolean', default: 'True' })
  is_base: boolean;
}
