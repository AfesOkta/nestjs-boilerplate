import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CabangService } from './cabang.service';
import { CreateCabangDto } from './dto/create-cabang.dto';
import { UpdateCabangDto } from './dto/update-cabang.dto';

@Controller('cabang')
export class CabangController {
  constructor(private readonly cabangService: CabangService) {}

  @Post()
  create(@Body() createCabangDto: CreateCabangDto) {
    return this.cabangService.create(createCabangDto);
  }

  @Get()
  findAll() {
    return this.cabangService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cabangService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCabangDto: UpdateCabangDto) {
    return this.cabangService.update(+id, updateCabangDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cabangService.remove(+id);
  }
}
