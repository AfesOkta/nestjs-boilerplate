import { ApiProperty } from '@nestjs/swagger';
import { Pelanggan } from '../entities/pelanggan.entity';

export class PaginatedPelangganResponse {
  @ApiProperty({ type: [Pelanggan] })
  data: Pelanggan[];

  @ApiProperty()
  total: number;

  @ApiProperty()
  page: number;

  @ApiProperty()
  limit: number;
}
