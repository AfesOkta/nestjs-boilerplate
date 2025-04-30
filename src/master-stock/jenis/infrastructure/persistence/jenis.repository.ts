import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../../../base/base_repository.repository';
import { Jenis } from '../../entities/jenis.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class JenisRepository extends BaseRepository<Jenis> {
  constructor(private dataSource: DataSource) {
    super(Jenis, dataSource);
  }

  async findByName(name: string): Promise<Jenis | null> {
    const jenis = await this.findOne({
      where: {
        name: name,
      },
    });
    return jenis;
  }
}
