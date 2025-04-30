import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateSatuanDto {
  @ApiProperty({
    type: String,
    example: 'Pcs',
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({
    type: String,
    example: 'Pcs',
  })
  @IsOptional()
  @IsString()
  symbol?: string;

  @ApiProperty({
    type: Boolean,
    example: 'True',
  })
  @IsOptional()
  is_base?: boolean;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsNumber()
  updatedBy: number;

  @ApiProperty({ example: new Date() })
  @IsOptional()
  updatedAt: Date;
}
