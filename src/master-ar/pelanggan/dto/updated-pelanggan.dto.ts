import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class updatedPelangganDto {
  @ApiProperty({
    type: String,
    example: 'C0001',
  })
  @IsOptional()
  @IsString()
  cust_code?: string;

  @ApiProperty({
    type: String,
    example: 'DEFAULT',
  })
  @IsOptional()
  @IsString()
  cust_name?: string;

  @ApiProperty({
    type: String,
    example: 'Jl. Manyar Kartika 8 No. 44 Surabaya',
  })
  @IsOptional()
  @IsString()
  cust_address?: string;

  @ApiProperty({
    type: String,
    example: '+628111119563',
  })
  @IsOptional()
  @IsString()
  cust_telp?: string;

  @ApiProperty({
    type: String,
    example: 'cust@mail.com',
  })
  @IsOptional()
  @IsString()
  cust_email?: string;

  @ApiProperty({
    type: Boolean,
    example: 'True',
  })
  @IsOptional()
  is_active?: boolean;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsNumber()
  updatedBy: number;

  @ApiProperty({ example: new Date() })
  @IsOptional()
  updatedAt: Date;
}
