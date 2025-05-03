import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../base/base_entity.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('customers')
export class Pelanggan extends BaseEntity {
  @ApiProperty({
    type: String,
    example: 'C0001',
  })
  @Column({ type: 'varchar', length: 15 })
  cust_code: string;

  @ApiProperty({
    type: String,
    example: 'DEFAULT',
  })
  @Column({ type: 'varchar', length: 100 })
  cust_name: string;

  @ApiProperty({
    type: String,
    example: 'Jl. Manyar Kartika 8 No. 44 Surabaya',
  })
  @Column({ type: 'varchar', length: 250 })
  cust_address: string;

  @ApiProperty({
    type: String,
    example: '+62811115893',
  })
  @Column({ type: 'varchar', length: 15 })
  cust_telp: string;

  @ApiProperty({
    type: String,
    example: 'cust@mail.com',
  })
  @Column({ type: 'varchar', length: 100 })
  cust_email: string;

  @ApiProperty({
    type: Boolean,
    example: 'C0001',
  })
  @Column({ type: 'bool' })
  is_actived: boolean;
}
