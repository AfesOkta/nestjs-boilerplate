import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../base/base_entity.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('merk')
export class Merk extends BaseEntity {
  @ApiProperty({
    type: String,
    example: 'Merek A',
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
