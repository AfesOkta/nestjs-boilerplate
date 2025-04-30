import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../base/base_entity.entity';

@Entity('golongan')
export class Golongan extends BaseEntity {
  @ApiProperty({
    type: String,
    example: 'Golongan A',
  })
  @Column({ type: 'varchar', length: 255 })
  name: string;
  @ApiProperty({
    type: Boolean,
    example: 'True',
  })
  @Column({ type: 'boolean', default: 'True' })
  is_active: boolean;
}
