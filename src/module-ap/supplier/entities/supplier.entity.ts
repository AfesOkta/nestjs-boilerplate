import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../base/base_entity.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('suppliers')
export class Pemasok extends BaseEntity {
  @ApiProperty({
    type: String,
    example: 'S0001',
  })
  @Column({ type: 'varchar', length: 15 })
  supp_code: string;

  @ApiProperty({
    type: String,
    example: 'DEFAULT',
  })
  @Column({ type: 'varchar', length: 100 })
  supp_name: string;

  @ApiProperty({
    type: String,
    example: 'Jl. Manyar Kartika 8 No. 44 Surabaya',
  })
  @Column({ type: 'varchar', length: 250 })
  supp_address: string;

  @ApiProperty({
    type: String,
    example: '+62811115893',
  })
  @Column({ type: 'varchar', length: 15 })
  supp_telp: string;

  @ApiProperty({
    type: String,
    example: 'supp@mail.com',
  })
  @Column({ type: 'varchar', length: 100 })
  supp_email: string;

  @ApiProperty({
    type: Boolean,
    example: 'true',
  })
  @Column({ type: 'bool' })
  is_actived: boolean;
}
