import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateGudangDto {
  @ApiProperty({ example: 'Gudang Utama', type: String })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: true, type: Boolean })
  @IsOptional()
  is_active: boolean;

  @ApiProperty({ example: false, type: Boolean })
  @IsOptional()
  is_default: boolean;

  @ApiProperty({ example: 1, type: Number })
  @IsOptional()
  @IsNumber()
  updatedBy: number;

  @ApiProperty({ example: new Date(), type: Date })
  @IsOptional()
  updatedAt: Date;
}
