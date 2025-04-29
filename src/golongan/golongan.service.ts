import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base_service.service';
import { Golongan } from './entities/golongan.entity';
import { GolonganRepository } from './infrastructure/golongan.repository';
import { CreatedGolonganDto } from './dto/created-golongan.dto';
import { UpdatedGolonganDto } from './dto/updated-golongan.dto';

@Injectable()
export class GolonganService extends BaseService<Golongan> {
  constructor(private readonly golonganRepository: GolonganRepository) {
    super(golonganRepository);
  }
  create(createGolonganDto: CreatedGolonganDto): Promise<Golongan> {
    return this.golonganRepository.createEntity({
      name: createGolonganDto.name,
      is_active: createGolonganDto.is_active,
      createdBy: createGolonganDto.createdBy,
      createdAt: createGolonganDto.createdAt,
    });
  }
  findAll(): Promise<Golongan[]> {
    return this.golonganRepository.findAll();
  }
  findOne(id: number): Promise<Golongan> {
    return this.golonganRepository
      .findOne({ where: { id } })
      .then((Golongan) => {
        if (!Golongan) {
          throw new Error(`Golongan with ID ${id} not found`);
        }
        return Golongan;
      });
  }
  update(id: number, updateGolonganDto: UpdatedGolonganDto): Promise<Golongan> {
    return this.golonganRepository.update(id, updateGolonganDto).then(() => {
      return this.findOne(id);
    });
  }
  remove(id: number): Promise<void> {
    return this.findOne(id).then((Golongan) => {
      return this.golonganRepository.remove(Golongan).then(() => undefined);
    });
  }
}
