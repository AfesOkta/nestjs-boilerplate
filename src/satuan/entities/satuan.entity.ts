import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../base/base_entity.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('satuan')
export class Satuan extends BaseEntity {
  // Define properties and decorators here
  @ApiProperty({
    type: String,
    example: 'Pcs',
  })
  @Column({ type: 'varchar', length: 255 })
  name: string;
  @ApiProperty({
    type: String,
    example: 'Pcs',
  })
  @Column({ type: 'varchar', length: 255 })
  symbol: string;
  @ApiProperty({
    type: Boolean,
    example: 'True',
  })
  @Column({ type: 'boolean', default: 'True' })
  is_base: boolean;
}
