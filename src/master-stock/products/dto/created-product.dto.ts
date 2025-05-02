import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatedProductDto {
  @ApiProperty({
    type: String,
    example: 'PG00001',
  })
  @IsOptional()
  @IsString()
  product_code?: string;

  @ApiProperty({
    type: String,
    example: 'Indomie Special Ayam',
  })
  @IsOptional()
  @IsString()
  product_name?: string;

  @ApiProperty({
    type: String,
    example: 'PG00001',
  })
  @IsOptional()
  @IsString()
  product_barcode?: string;

  @ApiProperty({
    type: Number,
    example: '1',
  })
  @IsOptional()
  @IsNumber()
  product_type?: number;

  @ApiProperty({
    type: Number,
    example: '1',
  })
  @IsOptional()
  @IsNumber()
  product_unit?: number;

  @ApiProperty({
    type: Number,
    example: '2000',
  })
  @IsOptional()
  @IsNumber()
  product_purchase_price?: number;

  @ApiProperty({
    type: Number,
    example: '3000',
  })
  @IsOptional()
  @IsNumber()
  product_sales_price?: number;

  @ApiProperty({
    type: Number,
    example: '1000',
  })
  @IsOptional()
  @IsNumber()
  product_margin?: number;

  @ApiProperty({
    type: Number,
    example: '3000',
  })
  @IsOptional()
  @IsNumber()
  product_cogs?: number;

  @ApiProperty({
    type: Boolean,
    example: 'True',
  })
  @IsOptional()
  is_active?: boolean;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsNumber()
  createdBy: number;

  @ApiProperty({ example: new Date() })
  @IsOptional()
  createdAt: Date;
}
