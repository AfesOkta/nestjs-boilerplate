import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Jenis } from '../../../../jenis/entities/jenis.entity';

@Injectable()
export class JenisSeedService {
  constructor(
    @InjectRepository(Jenis)
    private repository: Repository<Jenis>,
  ) {}

  async run() {
    await this.repository.save(
      this.repository.create({
        name: 'NONE',
        is_base: true,
        createdBy: 1,
      }),
    );
  }
}
