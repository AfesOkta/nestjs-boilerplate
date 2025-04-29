import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base_service.service';
import { Gudang } from './entities/gudang.entity';
import { CreateGudangDto } from './dto/create-gudang.dto';
import { UpdateGudangDto } from './dto/update-gudang.dto';
import { GudangRepository } from './infrastructure/persistence/gudang.repository';

@Injectable()
export class GudangService extends BaseService<Gudang> {
  constructor(private readonly gudangRepository: GudangRepository) {
    super(gudangRepository);
  }
  create(createGudangDto: CreateGudangDto): Promise<Gudang> {
    return this.gudangRepository.createEntity({
      name: createGudangDto.name,
      is_default: createGudangDto.is_default,
      is_active: createGudangDto.is_active,
      createdBy: createGudangDto.createdBy,
      createdAt: createGudangDto.createdAt,
    });
  }
  findAll(): Promise<Gudang[]> {
    return this.gudangRepository.findAll();
  }
  findOne(id: number): Promise<Gudang> {
    return this.gudangRepository.findOne({ where: { id } }).then((gudang) => {
      if (!gudang) {
        throw new Error(`Gudang with ID ${id} not found`);
      }
      return gudang;
    });
  }
  update(id: number, updateGudangDto: UpdateGudangDto): Promise<Gudang> {
    return this.gudangRepository.update(id, updateGudangDto).then(() => {
      return this.findOne(id);
    });
  }

  remove(id: number): Promise<void> {
    return this.findOne(id).then((gudang) => {
      return this.gudangRepository.remove(gudang).then(() => undefined);
    });
  }
  findByName(name: string): Promise<Gudang | null> {
    return this.gudangRepository.findByName(name);
  }
  findByGudangId(id: number): Promise<Gudang | null> {
    return this.gudangRepository.findOne({ where: { id } });
  }
}
