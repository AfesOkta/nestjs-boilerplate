import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Decimal128 } from 'typeorm';

export class CreateCurrencyDto {
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
    example: 1,
  })
  rate: Decimal128;

  @ApiProperty({
    type: Boolean,
    example: 'True',
  })
  @IsOptional()
  is_base?: boolean;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsNumber()
  createdBy: number;

  @ApiProperty({ example: new Date() })
  @IsOptional()
  createdAt: Date;
}
