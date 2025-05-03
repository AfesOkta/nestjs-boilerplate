import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base_service.service';
import { Pelanggan } from './entities/pelanggan.entity';
import { PelangganRepository } from './infrastructure/persistence/pelanggan.repository';
import { CreatedPelangganDto } from './dto/created-pelanggan.dto';
import { updatedPelangganDto } from './dto/updated-pelanggan.dto';

@Injectable()
export class PelangganService extends BaseService<Pelanggan> {
  constructor(private pelangganRepository: PelangganRepository) {
    super(pelangganRepository);
  }

  create(createPelangganDto: CreatedPelangganDto): Promise<Pelanggan> {
    return this.pelangganRepository.createEntity({
      cust_code: createPelangganDto.cust_code,
      cust_name: createPelangganDto.cust_name,
      cust_address: createPelangganDto.cust_address,
      cust_telp: createPelangganDto.cust_telp,
      cust_email: createPelangganDto.cust_email,
      is_actived: createPelangganDto.is_active,
      createdBy: createPelangganDto.createdBy,
      createdAt: createPelangganDto.createdAt,
    });
  }

  async findAlls(
    page: number,
    limit: number,
  ): Promise<{
    data: Pelanggan[];
    total: number;
    page: number;
    limit: number;
  }> {
    const [data, total] = await this.pelangganRepository.findAlls(page, limit);

    return {
      data,
      total,
      page,
      limit,
    };
  }

  findOne(id: number): Promise<Pelanggan> {
    return this.pelangganRepository
      .findOne({ where: { id } })
      .then((Pelanggan) => {
        if (!Pelanggan) {
          throw new Error(`Pelanggan with ID ${id} not found`);
        }
        return Pelanggan;
      });
  }

  update(
    id: number,
    updatePelangganDto: updatedPelangganDto,
  ): Promise<Pelanggan> {
    return this.pelangganRepository.update(id, updatePelangganDto).then(() => {
      return this.findOne(id);
    });
  }

  remove(id: number): Promise<void> {
    return this.findOne(id).then((Pelanggan) => {
      return this.pelangganRepository.remove(Pelanggan).then(() => undefined);
    });
  }

  findByPelanggan(name: string): Promise<Pelanggan | null> {
    return this.pelangganRepository.findByName(name);
  }

  findByCodePelanggan(code: string): Promise<Pelanggan | null> {
    return this.pelangganRepository.findByCode(code);
  }

  async findByCodeOrName(
    code: string,
    name: string,
    page: number,
    limit: number,
  ): Promise<{
    data: Pelanggan[];
    total: number;
    page: number;
    limit: number;
  }> {
    // Validasi parameter
    if (!code && !name) {
      throw new Error('Harap berikan parameter pencarian');
    }

    const [data, total] = await this.pelangganRepository.findByCodeOrName(
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
