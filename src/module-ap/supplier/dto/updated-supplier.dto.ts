import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdatedPemasokDto {
  @ApiProperty({
    type: String,
    example: 'S0001',
  })
  @IsOptional()
  @IsString()
  supp_code?: string;

  @ApiProperty({
    type: String,
    example: 'DEFAULT',
  })
  @IsOptional()
  @IsString()
  supp_name?: string;

  @ApiProperty({
    type: String,
    example: 'Jl. Manyar Kartika 8 No. 44 Surabaya',
  })
  @IsOptional()
  @IsString()
  supp_address?: string;

  @ApiProperty({
    type: String,
    example: '+628111119563',
  })
  @IsOptional()
  @IsString()
  supp_telp?: string;

  @ApiProperty({
    type: String,
    example: 'supp@mail.com',
  })
  @IsOptional()
  @IsString()
  supp_email?: string;

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
