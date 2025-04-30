import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Currency } from '../../../../master-global/currency/entities/currency.entity';

@Injectable()
export class CurrencySeedService {
  constructor(
    @InjectRepository(Currency)
    private repository: Repository<Currency>,
  ) {}

  async run() {
    await this.repository.save(
      this.repository.create({
        name: 'USD',
        rate: 18000,
        is_base: true,
        createdBy: 1,
      }),
    );

    await this.repository.save(
      this.repository.create({
        name: 'IDR',
        rate: 1,
        is_base: true,
        createdBy: 1,
      }),
    );
  }
}
