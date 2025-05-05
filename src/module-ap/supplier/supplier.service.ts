import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base_service.service';
import { Pemasok } from './entities/supplier.entity';
import { CreatedPemasokDto } from './dto/created-supplier.dto';
import { UpdatedPemasokDto } from './dto/updated-supplier.dto';
import { PemasokRepository } from './infrastructure/persistence/supplier.repository';

@Injectable()
export class PemasokService extends BaseService<Pemasok> {
  constructor(private readonly pemasokRepository: PemasokRepository) {
    super(pemasokRepository);
  }

  create(createPemasokDto: CreatedPemasokDto): Promise<Pemasok> {
    return this.pemasokRepository.createEntity({
      supp_code: createPemasokDto.supp_code,
      supp_name: createPemasokDto.supp_name,
      supp_address: createPemasokDto.supp_address,
      supp_telp: createPemasokDto.supp_telp,
      supp_email: createPemasokDto.supp_email,
      is_actived: createPemasokDto.is_active,
      createdBy: createPemasokDto.createdBy,
      createdAt: createPemasokDto.createdAt,
    });
  }

  async findAlls(
    page: number,
    limit: number,
  ): Promise<{
    data: Pemasok[];
    total: number;
    page: number;
    limit: number;
  }> {
    const [data, total] = await this.pemasokRepository.findAlls(page, limit);

    return {
      data,
      total,
      page,
      limit,
    };
  }

  findOne(id: number): Promise<Pemasok> {
    return this.pemasokRepository.findOne({ where: { id } }).then((Pemasok) => {
      if (!Pemasok) {
        throw new Error(`Pemasok with ID ${id} not found`);
      }
      return Pemasok;
    });
  }

  update(id: number, updatePemasokDto: UpdatedPemasokDto): Promise<Pemasok> {
    return this.pemasokRepository.update(id, updatePemasokDto).then(() => {
      return this.findOne(id);
    });
  }

  remove(id: number): Promise<void> {
    return this.findOne(id).then((Pemasok) => {
      return this.pemasokRepository.remove(Pemasok).then(() => undefined);
    });
  }

  findByPemasok(name: string): Promise<Pemasok | null> {
    return this.pemasokRepository.findByName(name);
  }

  findByCodePemasok(code: string): Promise<Pemasok | null> {
    return this.pemasokRepository.findByCode(code);
  }

  async findByCodeOrName(
    code: string,
    name: string,
    page: number,
    limit: number,
  ): Promise<{
    data: Pemasok[];
    total: number;
    page: number;
    limit: number;
  }> {
    // Validasi parameter
    if (!code && !name) {
      throw new Error('Harap berikan parameter pencarian');
    }

    const [data, total] = await this.pemasokRepository.findByCodeOrName(
      code,
      name,
      page,
      limit,
    );

    return {
      data,
      total,
      page,
      limit,
    };
  }
}
