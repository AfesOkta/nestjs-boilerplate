import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Req,
  SerializeOptions,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { Roles } from '../../roles/roles.decorator';
import { RoleEnum } from '../../roles/roles.enum';
import { RolesGuard } from '../../roles/roles.guard';
import { AuthGuard } from '@nestjs/passport';
import { PelangganService } from './pelanggan.service';
import { Pelanggan } from './entities/pelanggan.entity';
import { CreatedPelangganDto } from './dto/created-pelanggan.dto';
import { InfinityPaginationResponse } from '../../utils/dto/infinity-pagination-response.dto';
import { updatedPelangganDto } from './dto/updated-pelanggan.dto';
import { PaginatedPelangganResponse } from './dto/paginated-pelanggan-response.dto';

@ApiBearerAuth()
@Roles(RoleEnum.admin, RoleEnum.user)
@UseGuards(AuthGuard('jwt'), RolesGuard)
@ApiTags('Pelanggan')
@Controller({
  path: 'pelanggan',
  version: '1',
})
export class PelangganController {
  constructor(private readonly pelangganService: PelangganService) {}

  @ApiCreatedResponse({
    type: Pelanggan,
  })
  @SerializeOptions({
    groups: ['admin', 'user'],
  })
  @Post()
  create(
    @Body() createPelangganDto: CreatedPelangganDto,
    @Req() request: Request,
  ) {
    console.log('DTO:', createPelangganDto);
    const userId = (request as any).user?.id; // Assuming `request.user` contains the session user
    createPelangganDto.createdBy = userId;
    createPelangganDto.createdAt = new Date();
    return this.pelangganService.create(createPelangganDto);
  }

  @ApiOkResponse({
    type: InfinityPaginationResponse(Pelanggan),
  })
  @SerializeOptions({
    groups: ['admin', 'user'],
  })
  @Get()
  @ApiOkResponse({
    type: PaginatedPelangganResponse, // Create this DTO class
  })
  @HttpCode(HttpStatus.OK)
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return this.pelangganService.findAlls(page, limit);
  }

  @ApiOkResponse({
    type: Pelanggan,
  })
  @SerializeOptions({
    groups: ['admin', 'user'],
  })
  @ApiOkResponse({
    type: Pelanggan,
  })
  @SerializeOptions({
    groups: ['admin', 'user'],
  })
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'id',
    description: 'ID of the Pelanggan',
    type: 'number',
    required: true,
    example: 1,
  })
  update(
    @Param('id') id: string,
    @Body() updatePelangganDto: updatedPelangganDto,
    @Req() request: Request,
  ) {
    updatePelangganDto.updatedBy = (request as any).user?.id; // Assuming `request.user` contains the session user
    updatePelangganDto.updatedAt = new Date();
    console.log('DTO:', updatePelangganDto);
    return this.pelangganService.update(+id, updatePelangganDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.pelangganService.remove(+id);
  }

  @Get('search')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: PaginatedPelangganResponse, // Create this DTO class
  })
  @ApiQuery({
    name: 'code',
    required: false,
    description: 'Kode pelanggan (optional)',
  })
  @ApiQuery({
    name: 'name',
    required: false,
    description: 'Nama pelanggan (optional)',
  })
  async search(
    @Query('code') code?: string,
    @Query('name') name?: string,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    // Validasi salah satu harus diisi antara code/nama
    if (!code && !name) {
      throw new BadRequestException(
        'Harap berikan parameter pencarian (code atau name)',
      );
    }
    return this.pelangganService.findByCodeOrName(
      code || '',
      name || '',
      page,
      limit,
    );
  }
}
