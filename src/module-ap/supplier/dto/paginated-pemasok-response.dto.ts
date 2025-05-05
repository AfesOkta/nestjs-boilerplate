import { ApiProperty } from '@nestjs/swagger';
import { Pemasok } from '../entities/supplier.entity';

export class PaginatedPemasokResponse {
  @ApiProperty({ type: [Pemasok] })
  data: Pemasok[];

  @ApiProperty()
  total: number;

  @ApiProperty()
  page: number;

  @ApiProperty()
  limit: number;
}
