import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gudang } from '../../../../gudang/entities/gudang.entity';

@Injectable()
export class GudangSeedService {
  constructor(
    @InjectRepository(Gudang)
    private repository: Repository<Gudang>,
  ) {}

  async run() {
    await this.repository.save(
      this.repository.create({
        name: 'Gudang',
        is_active: true,
        is_default: true,
        createdBy: 1,
      }),
    );

    await this.repository.save(
      this.repository.create({
        name: 'Gudang 2',
        is_active: true,
        is_default: false,
        createdBy: 1,
      }),
    );
  }
}
