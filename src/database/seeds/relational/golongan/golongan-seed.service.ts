import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Golongan } from '../../../../golongan/entities/golongan.entity';

@Injectable()
export class GolonganSeedService {
  constructor(
    @InjectRepository(Golongan)
    private repository: Repository<Golongan>,
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
