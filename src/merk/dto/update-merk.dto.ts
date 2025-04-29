import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateMerkDto {
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
  is_active?: boolean;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsNumber()
  updateddBy: number;

  @ApiProperty({ example: new Date() })
  @IsOptional()
  updatedAt: Date;
}
