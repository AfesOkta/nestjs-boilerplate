import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatedJenisDto {
  @ApiProperty({
    type: String,
    example: 'Pcs',
  })
  @IsOptional()
  @IsString()
  name?: string;

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
