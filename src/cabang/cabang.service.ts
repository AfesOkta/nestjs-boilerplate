import { Injectable } from '@nestjs/common';
import { CreateCabangDto } from './dto/create-cabang.dto';
import { UpdateCabangDto } from './dto/update-cabang.dto';

@Injectable()
export class CabangService {
  create(createCabangDto: CreateCabangDto) {
    return 'This action adds a new cabang';
  }

  findAll() {
    return `This action returns all cabang`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cabang`;
  }

  update(id: number, updateCabangDto: UpdateCabangDto) {
    return `This action updates a #${id} cabang`;
  }

  remove(id: number) {
    return `This action removes a #${id} cabang`;
  }
}
