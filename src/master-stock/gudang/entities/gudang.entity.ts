import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../base/base_entity.entity';

@Entity('gudang')
export class Gudang extends BaseEntity {
  @ApiProperty({
    type: String,
    example: 'Gudang Utama',
  })
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @ApiProperty({
    type: Boolean,
    example: 'True',
  })
  @Column({ type: 'boolean', default: 'True' })
  is_active: boolean;

  @ApiProperty({
    type: Boolean,
    example: 'false',
  })
  @Column({ type: 'boolean', default: 'false' })
  is_default: boolean;
}
