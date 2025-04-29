import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../base/base_entity.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('jenis')
export class Jenis extends BaseEntity {
  @ApiProperty({
    type: String,
    example: 'Jenis A',
  })
  @Column({ type: 'varchar', length: 255 })
  name: string;
  @ApiProperty({
    type: Boolean,
    example: 'True',
  })
  @Column({ type: 'boolean', default: 'True' })
  is_base: boolean;
}
