import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../../base/base_repository.repository';
import { Golongan } from '../entities/golongan.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class GolonganRepository extends BaseRepository<Golongan> {
  constructor(private dataSource: DataSource) {
    super(Golongan, dataSource);
  }

  async findByName(name: string): Promise<Golongan | null> {
    const golongan = await this.findOne({
      where: {
        name: name,
      },
    });
    return golongan;
  }
}
