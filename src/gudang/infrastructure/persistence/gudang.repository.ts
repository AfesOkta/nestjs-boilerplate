import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { BaseRepository } from '../../../base/base_repository.repository';
import { Gudang } from '../../entities/gudang.entity';

@Injectable()
export class GudangRepository extends BaseRepository<Gudang> {
  constructor(private dataSource: DataSource) {
    super(Gudang, dataSource);
  }

  async findByName(name: string): Promise<Gudang | null> {
    const gudang = await this.findOne({
      where: {
        name: name,
      },
    });
    return gudang;
  }

  async findByActived(actived: string): Promise<Gudang | null> {
    const gudang = await this.findOne({
      where: {
        actived: actived,
      },
    });
    return gudang;
  }

  async findByNameAndActived(
    name: string,
    actived: string,
  ): Promise<Gudang | null> {
    const gudang = await this.findOne({
      where: {
        name: name,
        actived: actived,
      },
    });
    return gudang;
  }
}
