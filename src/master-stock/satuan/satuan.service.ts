import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base_service.service';
import { Satuan } from './entities/satuan.entity';
import { SatuanRepository } from './infrastructure/persistence/satuan.repository';
import { UpdateSatuanDto } from './dto/update-satuan.dto';
import { CreatedSatuanDto } from './dto/create-satuan.dto';

@Injectable()
export class SatuanService extends BaseService<Satuan> {
  constructor(private readonly satuanRepository: SatuanRepository) {
    super(satuanRepository);
  }

  create(createSatuanDto: CreatedSatuanDto): Promise<Satuan> {
    return this.satuanRepository.createEntity({
      name: createSatuanDto.name,
      symbol: createSatuanDto.symbol,
      is_base: createSatuanDto.is_base,
      createdBy: createSatuanDto.createdBy,
      createdAt: createSatuanDto.createdAt,
    });
  }

  findAll(): Promise<Satuan[]> {
    return this.satuanRepository.findAll();
  }

  findOne(id: number): Promise<Satuan> {
    return this.satuanRepository.findOne({ where: { id } }).then((satuan) => {
      if (!satuan) {
        throw new Error(`satuan with ID ${id} not found`);
      }
      return satuan;
    });
  }

  update(id: number, updatesatuanDto: UpdateSatuanDto): Promise<Satuan> {
    return this.satuanRepository.update(id, updatesatuanDto).then(() => {
      return this.findOne(id);
    });
  }

  remove(id: number): Promise<void> {
    return this.findOne(id).then((satuan) => {
      return this.satuanRepository.remove(satuan).then(() => undefined);
    });
  }

  findBysatuan(satuan: string): Promise<Satuan | null> {
    return this.satuanRepository.findByName(satuan);
  }
}
