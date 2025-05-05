import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../../../base/base_repository.repository';
import { DataSource } from 'typeorm';
import { Pemasok } from '../../entities/supplier.entity';

@Injectable()
export class PemasokRepository extends BaseRepository<Pemasok> {
  constructor(private dataSource: DataSource) {
    super(Pemasok, dataSource);
  }

  async findByName(supp_name: string): Promise<Pemasok | null> {
    return this.findOne({ where: { supp_name } });
  }

  async findByCode(supp_code: string): Promise<Pemasok | null> {
    return this.findOne({ where: { supp_code } });
  }

  async findByCodeOrName(
    supp_code: string,
    supp_name: string,
    page: number = 1,
    limit: number = 10,
  ): Promise<[Pemasok[], number]> {
    const skip = (page - 1) * limit;
    const queryBuilder = this.createQueryBuilder('pemasok');

    if (supp_code) {
      queryBuilder.orWhere('pemasok.supp_code ILike :code', {
        code: `%${supp_code}%`,
      });
    }

    if (supp_name) {
      queryBuilder.orWhere('pemasok.supp_name ILike :name', {
        name: `%${supp_name}%`,
      });
    }

    queryBuilder.skip(skip).take(limit);

    return queryBuilder.getManyAndCount();
  }

  async findAlls(
    page: number = 1,
    limit: number = 10,
  ): Promise<[Pemasok[], number]> {
    const skip = (page - 1) * limit;
    const queryBuilder = this.createQueryBuilder('pemasok');

    queryBuilder.skip(skip).take(limit);

    return queryBuilder.getManyAndCount();
  }
}
