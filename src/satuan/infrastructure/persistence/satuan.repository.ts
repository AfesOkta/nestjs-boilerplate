import { DataSource } from 'typeorm';
import { BaseRepository } from '../../../base/base_repository.repository';
import { Satuan } from '../../entities/satuan.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SatuanRepository extends BaseRepository<Satuan> {
  constructor(private dataSource: DataSource) {
    super(Satuan, dataSource);
  }

  async findByName(name: string): Promise<Satuan | null> {
    const satuan = await this.findOne({
      where: {
        name: name,
      },
    });
    return satuan;
  }

  async findBySymbol(symbol: string): Promise<Satuan | null> {
    const satuan = await this.findOne({
      where: {
        symbol: symbol,
      },
    });
    return satuan;
  }

  async findByNameAndSymbol(
    name: string,
    symbol: string,
  ): Promise<Satuan | null> {
    const satuan = await this.findOne({
      where: {
        name: name,
        symbol: symbol,
      },
    });
    return satuan;
  }
}
