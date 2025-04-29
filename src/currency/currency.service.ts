import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base_service.service';
import { Currency } from './entities/currency.entity';
import { CurrencyRepository } from './infrastructure/persistence/currency.repository';
import { CreateCurrencyDto } from './dto/currency-create.dto';
import { UpdateCurrencyDto } from './dto/currency-update.dto';

@Injectable()
export class CurrencyService extends BaseService<Currency> {
  constructor(private readonly currencyRepository: CurrencyRepository) {
    super(currencyRepository);
  }

  create(createCurrencyDto: CreateCurrencyDto): Promise<Currency> {
    return this.currencyRepository.createEntity({
      name: createCurrencyDto.name,
      symbol: createCurrencyDto.symbol,
      is_base: createCurrencyDto.is_base,
      createdBy: createCurrencyDto.createdBy,
      createdAt: createCurrencyDto.createdAt,
    });
  }

  findAll(): Promise<Currency[]> {
    return this.currencyRepository.findAll();
  }

  findOne(id: number): Promise<Currency> {
    return this.currencyRepository
      .findOne({ where: { id } })
      .then((currency) => {
        if (!currency) {
          throw new Error(`currency with ID ${id} not found`);
        }
        return currency;
      });
  }

  update(id: number, updateCurrencyDto: UpdateCurrencyDto): Promise<Currency> {
    return this.currencyRepository.update(id, updateCurrencyDto).then(() => {
      return this.findOne(id);
    });
  }

  remove(id: number): Promise<void> {
    return this.findOne(id).then((currency) => {
      return this.currencyRepository.remove(currency).then(() => undefined);
    });
  }

  findByName(name: string): Promise<Currency | null> {
    return this.currencyRepository.findByName(name);
  }
}
