import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../base/base_entity.entity';

@Entity('gudang')
export class Gudang extends BaseEntity {
  @ApiProperty({
    type: String,
    example: 'Gudang Utama',
  })
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @ApiProperty({
    type: String,
    example: 'Y',
  })
  @Column({ type: 'varchar', default: 'Y' })
  actived: string;
}
