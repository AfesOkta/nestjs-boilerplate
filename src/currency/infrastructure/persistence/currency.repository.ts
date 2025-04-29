import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../../base/base_repository.repository';
import { DataSource } from 'typeorm';
import { Currency } from '../../entities/currency.entity';
@Injectable()
export class CurrencyRepository extends BaseRepository<Currency> {
  constructor(private dataSource: DataSource) {
    super(Currency, dataSource);
  }

  async findByName(name: string): Promise<Currency | null> {
    const currency = await this.findOne({
      where: {
        name: name,
      },
    });
    return currency;
  }

  async findBySymbol(symbol: string): Promise<Currency | null> {
    const currency = await this.findOne({
      where: {
        symbol: symbol,
      },
    });
    return currency;
  }

  async findByRate(rate: number): Promise<Currency | null> {
    const currency = await this.findOne({
      where: {
        rate: rate,
      },
    });
    return currency;
  }

  async findByNameAndSymbol({
    name,
    symbol,
  }: {
    name: Currency['name'];
    symbol: Currency['symbol'];
  }): Promise<Currency | null> {
    const currency = await this.findOne({
      where: {
        name: name,
        symbol: symbol,
      },
    });
    return currency;
  }

  async findByNameAndRate({
    name,
    rate,
  }: {
    name: Currency['name'];
    rate: Currency['rate'];
  }): Promise<Currency | null> {
    const currency = await this.findOne({
      where: {
        name: name,
        rate: rate,
      },
    });
    return currency;
  }
}
