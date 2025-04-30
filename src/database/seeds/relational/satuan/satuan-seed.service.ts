import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Satuan } from '../../../../master-stock/satuan/entities/satuan.entity';

@Injectable()
export class SatuanSeedService {
  constructor(
    @InjectRepository(Satuan)
    private repository: Repository<Satuan>,
  ) {}
  async run() {
    await this.repository.save(
      this.repository.create({
        name: 'Pieces',
        symbol: 'Pcs',
        is_base: true,
        createdBy: 1,
      }),
    );

    await this.repository.save(
      this.repository.create({
        name: 'Carton',
        symbol: 'CTN',
        is_base: false,
        createdBy: 1,
      }),
    );

    await this.repository.save(
      this.repository.create({
        name: 'Pack',
        symbol: 'PK',
        is_base: false,
        createdBy: 1,
      }),
    );

    await this.repository.save(
      this.repository.create({
        name: 'Pallet',
        symbol: 'PLT',
        is_base: false,
        createdBy: 1,
      }),
    );
    await this.repository.save(
      this.repository.create({
        name: 'Drum',
        symbol: 'DRM',
        is_base: false,
        createdBy: 1,
      }),
    );
    await this.repository.save(
      this.repository.create({
        name: 'Bag',
        symbol: 'BG',
        is_base: false,
        createdBy: 1,
      }),
    );
    await this.repository.save(
      this.repository.create({
        name: 'Can',
        symbol: 'CN',
        is_base: false,
        createdBy: 1,
      }),
    );
    await this.repository.save(
      this.repository.create({
        name: 'Bottle',
        symbol: 'BTL',
        is_base: false,
        createdBy: 1,
      }),
    );
    await this.repository.save(
      this.repository.create({
        name: 'Jar',
        symbol: 'JR',
        is_base: false,
        createdBy: 1,
      }),
    );
    await this.repository.save(
      this.repository.create({
        name: 'Kilogram',
        symbol: 'KG',
        is_base: false,
        createdBy: 1,
      }),
    );
    await this.repository.save(
      this.repository.create({
        name: 'Gram',
        symbol: 'GR',
        is_base: false,
        createdBy: 1,
      }),
    );
    await this.repository.save(
      this.repository.create({
        name: 'Liter',
        symbol: 'LTR',
        is_base: false,
        createdBy: 1,
      }),
    );
    await this.repository.save(
      this.repository.create({
        name: 'Meter',
        symbol: 'M',
        is_base: false,
        createdBy: 1,
      }),
    );
    await this.repository.save(
      this.repository.create({
        name: 'Centimeter',
        symbol: 'CM',
        is_base: false,
        createdBy: 1,
      }),
    );
    await this.repository.save(
      this.repository.create({
        name: 'Square Meter',
        symbol: 'M²',
        is_base: false,
        createdBy: 1,
      }),
    );
    await this.repository.save(
      this.repository.create({
        name: 'Cubic Meter',
        symbol: 'M³',
        is_base: false,
        createdBy: 1,
      }),
    );
    await this.repository.save(
      this.repository.create({
        name: 'Unit',
        symbol: 'UNT',
        is_base: false,
        createdBy: 1,
      }),
    );
    await this.repository.save(
      this.repository.create({
        name: 'Pair',
        symbol: 'PR',
        is_base: false,
        createdBy: 1,
      }),
    );
    await this.repository.save(
      this.repository.create({
        name: 'Set',
        symbol: 'SET',
        is_base: false,
        createdBy: 1,
      }),
    );
    await this.repository.save(
      this.repository.create({
        name: 'Dozen',
        symbol: 'DZN',
        is_base: false,
        createdBy: 1,
      }),
    );
    await this.repository.save(
      this.repository.create({
        name: 'Gross',
        symbol: 'GRS',
        is_base: false,
        createdBy: 1,
      }),
    );
    await this.repository.save(
      this.repository.create({
        name: 'Ream',
        symbol: 'RM',
        is_base: false,
        createdBy: 1,
      }),
    );
    await this.repository.save(
      this.repository.create({
        name: 'Roll',
        symbol: 'RL',
        is_base: false,
        createdBy: 1,
      }),
    );
    await this.repository.save(
      this.repository.create({
        name: 'Tube',
        symbol: 'TB',
        is_base: false,
        createdBy: 1,
      }),
    );
  }
}
