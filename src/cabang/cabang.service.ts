import { Injectable } from '@nestjs/common';
import { CreateCabangDto } from './dto/create-cabang.dto';
import { UpdateCabangDto } from './dto/update-cabang.dto';
import { Cabang } from './entities/cabang.entity';
import { CabangRepository } from './infrastructure/persistence/cabang.repository';
import { BaseService } from '../base/base_service.service';

@Injectable()
export class CabangService extends BaseService<Cabang> {
  constructor(private readonly cabangRepository: CabangRepository) {
    super(cabangRepository);
  }

  create(createCabangDto: CreateCabangDto): Promise<Cabang> {
    return Promise.resolve(this.cabangRepository.create(createCabangDto));
  }

  findAll(): Promise<Cabang[]> {
    return this.cabangRepository.findAll();
  }

  findOne(id: number): Promise<Cabang> {
    return this.cabangRepository.findOne({ where: { id } }).then((cabang) => {
      if (!cabang) {
        throw new Error(`Cabang with ID ${id} not found`);
      }
      return cabang;
    });
  }

  update(id: number, updateCabangDto: UpdateCabangDto): Promise<Cabang> {
    return this.cabangRepository.update(id, updateCabangDto).then(() => {
      return this.findOne(id);
    });
  }

  remove(id: number): Promise<void> {
    return this.findOne(id).then((cabang) => {
      return this.cabangRepository.remove(cabang).then(() => undefined);
    });
  }

  findByCabang(cabang: string): Promise<Cabang | null> {
    return this.cabangRepository.findByCabang(cabang);
  }
}
