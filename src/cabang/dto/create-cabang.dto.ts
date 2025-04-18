import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { lowerCaseTransformer } from '../../utils/transformers/lower-case.transformer';

export class CreateCabangDto {
  @ApiProperty({ example: 'cabang1', type: String })
  @Transform(lowerCaseTransformer)
  cabang: string;
  @ApiProperty({ example: '1', type: Number })
  createdBy: number;
  @ApiProperty({ example: new Date(), type: Date })
  createdAt: Date;
  @ApiProperty({ example: '1', type: Number })
  updatedBy: number;
  @ApiProperty({ example: new Date(), type: Date })
  updatedAt: Date;
}
