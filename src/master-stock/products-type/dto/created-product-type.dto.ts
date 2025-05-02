import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatedProductTypeDto {
  @ApiProperty({
    type: String,
    example: 'Goods',
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsNumber()
  createdBy: number;

  @ApiProperty({ example: new Date() })
  @IsOptional()
  createdAt: Date;
}
