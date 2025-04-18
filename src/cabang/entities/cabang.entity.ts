import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../base/base_entity.entity';

const idType = Number;

export class Cabang extends BaseEntity {
  @ApiProperty({
    type: idType,
  })
  id: number;
  @ApiProperty({
    type: String,
    example: 'Cabang 1',
  })
  cabang: string;
}
