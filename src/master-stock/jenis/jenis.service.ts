import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base_service.service';
import { Jenis } from './entities/jenis.entity';
import { CreatedJenisDto } from './dto/created-jenis.dto';
import { UpdatedJenisDto } from './dto/updated-jenis.dto';
import { JenisRepository } from './infrastructure/persistence/jenis.repository';

@Injectable()
export class JenisService extends BaseService<Jenis> {
  constructor(private readonly jenisRepository: JenisRepository) {
    super(jenisRepository);
  }
  create(createJenisDto: CreatedJenisDto): Promise<Jenis> {
    return this.jenisRepository.createEntity({
      name: createJenisDto.name,
      is_base: createJenisDto.is_base,
      createdBy: createJenisDto.createdBy,
      createdAt: createJenisDto.createdAt,
    });
  }
  findAll(): Promise<Jenis[]> {
    return this.jenisRepository.findAll();
  }
  findOne(id: number): Promise<Jenis> {
    return this.jenisRepository.findOne({ where: { id } }).then((jenis) => {
      if (!jenis) {
        throw new Error(`jenis with ID ${id} not found`);
      }
      return jenis;
    });
  }
  update(id: number, updateJenisDto: UpdatedJenisDto): Promise<Jenis> {
    return this.jenisRepository.update(id, updateJenisDto).then(() => {
      return this.findOne(id);
    });
  }
  remove(id: number): Promise<void> {
    return this.findOne(id).then((jenis) => {
      return this.jenisRepository.remove(jenis).then(() => undefined);
    });
  }
}
