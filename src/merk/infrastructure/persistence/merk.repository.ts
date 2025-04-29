import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Merk } from '../../enitites/merk.entity';
import { BaseRepository } from '../../../base/base_repository.repository';

@Injectable()
export class MerkRepository extends BaseRepository<Merk> {
  constructor(private dataSource: DataSource) {
    super(Merk, dataSource);
  }

  async findByName(name: string): Promise<Merk | null> {
    const merk = await this.findOne({
      where: {
        name: name,
      },
    });
    return merk;
  }
}
