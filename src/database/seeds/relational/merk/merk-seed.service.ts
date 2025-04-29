import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Merk } from '../../../../merk/enitites/merk.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MerkSeedService {
  constructor(
    @InjectRepository(Merk)
    private repository: Repository<Merk>,
  ) {}

  async run() {
    await this.repository.save(
      this.repository.create({
        name: 'NONE',
        is_active: true,
        createdBy: 1,
      }),
    );
  }
}
