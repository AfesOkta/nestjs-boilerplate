import { Module } from '@nestjs/common';
import { CurrencySeedService } from './currency-seed.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Currency } from '../../../../currency/entities/currency.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Currency])],
  providers: [CurrencySeedService],
  exports: [CurrencySeedService],
})
export class CurrencySeedModule {}
