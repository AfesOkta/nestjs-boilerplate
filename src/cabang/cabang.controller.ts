import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  SerializeOptions,
  HttpCode,
  HttpStatus,
  Req,
} from '@nestjs/common';
import { CabangService } from './cabang.service';
import { CreateCabangDto } from './dto/create-cabang.dto';
import { UpdateCabangDto } from './dto/update-cabang.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { Roles } from '../roles/roles.decorator';
import { RoleEnum } from '../roles/roles.enum';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../roles/roles.guard';
import { Cabang } from './entities/cabang.entity';
import { InfinityPaginationResponse } from '../utils/dto/infinity-pagination-response.dto';

@ApiBearerAuth()
@Roles(RoleEnum.admin)
@UseGuards(AuthGuard('jwt'), RolesGuard)
@ApiTags('Cabang')
@Controller({
  path: 'cabang',
  version: '1',
})
export class CabangController {
  constructor(private readonly cabangService: CabangService) {}
  @ApiCreatedResponse({
    type: Cabang,
  })
  @SerializeOptions({
    groups: ['admin'],
  })
  @Post()
  create(@Body() createCabangDto: CreateCabangDto, @Req() request: Request) {
    console.log('DTO:', createCabangDto);
    const userId = (request as any).user?.id; // Assuming `request.user` contains the session user
    createCabangDto.createdBy = userId;
    createCabangDto.createdAt = new Date();
    return this.cabangService.create(createCabangDto);
  }

  @ApiOkResponse({
    type: InfinityPaginationResponse(Cabang),
  })
  @SerializeOptions({
    groups: ['admin'],
  })
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.cabangService.findAll();
  }

  @ApiOkResponse({
    type: Cabang,
  })
  @SerializeOptions({
    groups: ['admin'],
  })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'id',
    description: 'ID of the cabang',
    type: 'number',
    required: true,
    example: 1,
  })
  findOne(@Param('id') id: string) {
    return this.cabangService.findOne(+id);
  }

  @ApiOkResponse({
    type: Cabang,
  })
  @SerializeOptions({
    groups: ['admin'],
  })
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'id',
    description: 'ID of the cabang',
    type: 'number',
    required: true,
    example: 1,
  })
  update(
    @Param('id') id: string,
    @Body() updateCabangDto: UpdateCabangDto,
    @Req() request: Request,
  ) {
    updateCabangDto.updatedBy = (request as any).user?.id; // Assuming `request.user` contains the session user
    updateCabangDto.updatedAt = new Date();
    console.log('DTO:', updateCabangDto);
    return this.cabangService.update(+id, updateCabangDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.cabangService.remove(+id);
  }
}
