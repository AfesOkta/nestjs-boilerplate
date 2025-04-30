import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../base/base_entity.entity';

@Entity('cabang')
export class Cabang extends BaseEntity {
  @ApiProperty({
    type: String,
    example: 'Cabang 1',
  })
  @Column()
  name: string;
}
