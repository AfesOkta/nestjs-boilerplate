import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { BaseRepository } from '../../../base/base_repository.repository';
import { Cabang } from '../../entities/cabang.entity';

@Injectable()
export class CabangRepository extends BaseRepository<Cabang> {
  constructor(private dataSource: DataSource) {
    super(Cabang, dataSource);
  }

  // Tambahkan metode custom jika diperlukan
  async findByCabang(cabang: string): Promise<Cabang | null> {
    return this.findOne({ where: { cabang } });
  }
}
