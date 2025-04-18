import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCabangDto } from './create-cabang.dto';

export class UpdateCabangDto extends PartialType(CreateCabangDto) {
  @ApiProperty({ example: 'cabang1', type: String })
  cabang?: string;

  @ApiProperty({ example: '1', type: Number })
  createdBy?: number;

  @ApiProperty({ example: new Date(), type: Date })
  createdAt?: Date;

  @ApiProperty({ example: '1', type: Number })
  updatedBy?: number;

  @ApiProperty({ example: new Date(), type: Date })
  updatedAt?: Date;
}
