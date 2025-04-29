import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base_service.service';
import { Merk } from './enitites/merk.entity';
import { UpdateMerkDto } from './dto/update-merk.dto';
import { CreatedMerkDto } from './dto/create-merk.dto';
import { MerkRepository } from './infrastructure/persistence/merk.repository';

@Injectable()
export class MerkService extends BaseService<Merk> {
  constructor(private readonly merkRepository: MerkRepository) {
    super(merkRepository);
  }

  create(createMerkDto: CreatedMerkDto): Promise<Merk> {
    return this.merkRepository.createEntity({
      name: createMerkDto.name,
      is_active: createMerkDto.is_active,
      createdBy: createMerkDto.createdBy,
      createdAt: createMerkDto.createdAt,
    });
  }

  findAll(): Promise<Merk[]> {
    return this.merkRepository.findAll();
  }

  findOne(id: number): Promise<Merk> {
    return this.merkRepository.findOne({ where: { id } }).then((merk) => {
      if (!merk) {
        throw new Error(`merk with ID ${id} not found`);
      }
      return merk;
    });
  }

  update(id: number, updatemerkDto: UpdateMerkDto): Promise<Merk> {
    return this.merkRepository.update(id, updatemerkDto).then(() => {
      return this.findOne(id);
    });
  }

  remove(id: number): Promise<void> {
    return this.findOne(id).then((merk) => {
      return this.merkRepository.remove(merk).then(() => undefined);
    });
  }

  findByName(name: string): Promise<Merk | null> {
    return this.merkRepository.findByName(name);
  }
}
