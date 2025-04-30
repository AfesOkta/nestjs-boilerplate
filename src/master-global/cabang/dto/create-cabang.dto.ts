import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCabangDto {
  @ApiProperty({ example: 'cabang1', type: String })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsNumber()
  createdBy: number;

  @ApiProperty({ example: new Date() })
  @IsOptional()
  createdAt: Date;
}
