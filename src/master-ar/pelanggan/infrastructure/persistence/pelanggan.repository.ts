import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../../../base/base_repository.repository';
import { Pelanggan } from '../../entities/pelanggan.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class PelangganRepository extends BaseRepository<Pelanggan> {
  constructor(private dataSource: DataSource) {
    super(Pelanggan, dataSource);
  }

  async findByName(cust_name: string): Promise<Pelanggan | null> {
    return this.findOne({ where: { cust_name } });
  }

  async findByCode(cust_code: string): Promise<Pelanggan | null> {
    return this.findOne({ where: { cust_code } });
  }

  async findByCodeOrName(
    cust_code: string,
    cust_name: string,
    page: number = 1,
    limit: number = 10,
  ): Promise<[Pelanggan[], number]> {
    const skip = (page - 1) * limit;
    const queryBuilder = this.createQueryBuilder('pelanggan');

    if (cust_code) {
      queryBuilder.orWhere('pelanggan.cust_code ILike :code', {
        code: `%${cust_code}%`,
      });
    }

    if (cust_name) {
      queryBuilder.orWhere('pelanggan.cust_name ILike :name', {
        name: `%${cust_name}%`,
      });
    }

    queryBuilder.skip(skip).take(limit);

    return queryBuilder.getManyAndCount();
  }

  async findAlls(
    page: number = 1,
    limit: number = 10,
  ): Promise<[Pelanggan[], number]> {
    const skip = (page - 1) * limit;
    const queryBuilder = this.createQueryBuilder('pelanggan');

    queryBuilder.skip(skip).take(limit);

    return queryBuilder.getManyAndCount();
  }
}
