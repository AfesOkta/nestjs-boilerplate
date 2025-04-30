import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { plainToInstance, Transform, Type } from 'class-transformer';
import { IsNumber, IsOptional, ValidateNested } from 'class-validator';

export class FilterCabangDto {
  @ApiProperty({
    type: String,
    example: 'cabang1',
  })
  cabang?: string;

  @ApiProperty({
    type: Number,
    example: '1',
  })
  createdBy?: number;

  @ApiProperty({
    type: Date,
    example: new Date(),
  })
  createdAt?: Date;

  @ApiProperty({
    type: Number,
    example: '1',
  })
  updatedBy?: number;

  @ApiProperty({
    type: Date,
    example: new Date(),
  })
  updatedAt?: Date;
}
export class SortCabangDto {
  @ApiProperty({
    type: String,
    example: 'cabang1',
  })
  cabang?: string;

  @ApiProperty({
    type: Number,
    example: '1',
  })
  createdBy?: number;

  @ApiProperty({
    type: Date,
    example: new Date(),
  })
  createdAt?: Date;

  @ApiProperty({
    type: Number,
    example: '1',
  })
  updatedBy?: number;

  @ApiProperty({
    type: Date,
    example: new Date(),
  })
  updatedAt?: Date;
}
export class QueryCabangDto {
  @ApiPropertyOptional()
  @Transform(({ value }) => (value ? Number(value) : 1))
  @IsNumber()
  @IsOptional()
  page?: number;

  @ApiPropertyOptional()
  @Transform(({ value }) => (value ? Number(value) : 10))
  @IsNumber()
  @IsOptional()
  limit?: number;

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  @Transform(({ value }) =>
    value ? plainToInstance(FilterCabangDto, JSON.parse(value)) : undefined,
  )
  @ValidateNested()
  @Type(() => FilterCabangDto)
  filters?: FilterCabangDto | null;

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  @Transform(({ value }) => {
    return value
      ? plainToInstance(SortCabangDto, JSON.parse(value))
      : undefined;
  })
  @ValidateNested({ each: true })
  @Type(() => SortCabangDto)
  sort?: SortCabangDto[] | null;
}
