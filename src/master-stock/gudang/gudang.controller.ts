import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  SerializeOptions,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { Roles } from '../../roles/roles.decorator';
import { RoleEnum } from '../../roles/roles.enum';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../../roles/roles.guard';
import { CreateGudangDto } from './dto/create-gudang.dto';
import { Gudang } from './entities/gudang.entity';
import { GudangService } from './gudang.service';
import { InfinityPaginationResponse } from '../../utils/dto/infinity-pagination-response.dto';
import { UpdateGudangDto } from './dto/update-gudang.dto';

@ApiBearerAuth()
@Roles(RoleEnum.admin)
@UseGuards(AuthGuard('jwt'), RolesGuard)
@ApiTags('Gudang')
@Controller({
  path: 'gudang',
  version: '1',
})
export class GudangController {
  constructor(private readonly gudangService: GudangService) {}
  @SerializeOptions({
    groups: ['admin'],
  })
  @Post()
  create(@Body() createGudangDto: CreateGudangDto, @Req() request: Request) {
    console.log('DTO:', createGudangDto);
    const userId = (request as any).user?.id; // Assuming `request.user` contains the session user
    createGudangDto.createdBy = userId;
    createGudangDto.createdAt = new Date();
    return this.gudangService.create(createGudangDto);
  }

  @ApiOkResponse({
    type: InfinityPaginationResponse(Gudang),
  })
  @SerializeOptions({
    groups: ['admin'],
  })
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.gudangService.findAll();
  }

  @ApiOkResponse({
    type: Gudang,
  })
  @SerializeOptions({
    groups: ['admin'],
  })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'id',
    description: 'ID of the Gudang',
    type: 'number',
    required: true,
    example: 1,
  })
  findOne(@Param('id') id: string) {
    return this.gudangService.findOne(+id);
  }

  @ApiOkResponse({
    type: Gudang,
  })
  @SerializeOptions({
    groups: ['admin'],
  })
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'id',
    description: 'ID of the Gudang',
    type: 'number',
    required: true,
    example: 1,
  })
  update(
    @Param('id') id: string,
    @Body() updateGudangDto: UpdateGudangDto,
    @Req() request: Request,
  ) {
    updateGudangDto.updatedBy = (request as any).user?.id; // Assuming `request.user` contains the session user
    updateGudangDto.updatedAt = new Date();
    console.log('DTO:', updateGudangDto);
    return this.gudangService.update(+id, updateGudangDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.gudangService.remove(+id);
  }
}
