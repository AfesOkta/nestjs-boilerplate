import { ApiProperty } from '@nestjs/swagger';
import { Timestamp } from 'typeorm';

const idType = Number;

export class Cabang {
  @ApiProperty({
    type: idType,
  })
  id: number | string;
  @ApiProperty({
    type: String,
    example: 'cabang1',
  })
  cabang: string;
  @ApiProperty({
    type: Number,
    example: '1',
  })
  createdBy: number;
  @ApiProperty({
    type: Timestamp,
    example: new Date(),
  })
  createdAt: Timestamp;
  @ApiProperty({
    type: Number,
    example: '1',
  })
  updatedBy: number;
  @ApiProperty({
    type: Timestamp,
    example: new Date(),
  })
  updatedAt: Timestamp;
}
