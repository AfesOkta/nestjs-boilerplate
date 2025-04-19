import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../base/base_entity.entity';
import { Column, Entity } from 'typeorm';

@Entity('cabang')
export class Cabang extends BaseEntity {
  @ApiProperty({
    type: String,
    example: 'Cabang 1',
  })
  @Column()
  name: string;
}
