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
import { PemasokService } from './supplier.service';
import { Pemasok } from './entities/supplier.entity';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { CreatedPemasokDto } from './dto/created-supplier.dto';
import { PaginatedPemasokResponse } from './dto/paginated-pemasok-response.dto';
import { UpdatedPemasokDto } from './dto/updated-supplier.dto';
import { Roles } from '../../roles/roles.decorator';
import { RoleEnum } from '../../roles/roles.enum';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../../roles/roles.guard';

@ApiBearerAuth()
@Roles(RoleEnum.admin, RoleEnum.user)
@UseGuards(AuthGuard('jwt'), RolesGuard)
@ApiTags('Pemasok')
@Controller({
  path: 'supplier',
  version: '1',
})
export class SupplierController {
  constructor(private readonly pemasokService: PemasokService) {}

  @ApiCreatedResponse({
    type: Pemasok,
  })
  @SerializeOptions({
    groups: ['admin', 'user'],
  })
  @Post()
  create(@Body() createpemasokDto: CreatedPemasokDto, @Req() request: Request) {
    console.log('DTO:', createpemasokDto);
    const userId = (request as any).user?.id; // Assuming `request.user` contains the session user
    createpemasokDto.createdBy = userId;
    createpemasokDto.createdAt = new Date();
    return this.pemasokService.create(createpemasokDto);
  }

  @SerializeOptions({
    groups: ['admin', 'user'],
  })
  @Get()
  @ApiOkResponse({
    type: PaginatedPemasokResponse, // Create this DTO class
  })
  @HttpCode(HttpStatus.OK)
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return this.pemasokService.findAlls(page, limit);
  }

  @ApiOkResponse({
    type: Pemasok,
  })
  @SerializeOptions({
    groups: ['admin', 'user'],
  })
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'id',
    description: 'ID of the pemasok',
    type: 'number',
    required: true,
    example: 1,
  })
  update(
    @Param('id') id: string,
    @Body() updatepemasokDto: UpdatedPemasokDto,
    @Req() request: Request,
  ) {
    updatepemasokDto.updatedBy = (request as any).user?.id; // Assuming `request.user` contains the session user
    updatepemasokDto.updatedAt = new Date();
    console.log('DTO:', updatepemasokDto);
    return this.pemasokService.update(+id, updatepemasokDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.pemasokService.remove(+id);
  }

  @Get('search')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: PaginatedPemasokResponse, // Create this DTO class
  })
  @ApiQuery({
    name: 'code',
    required: false,
    description: 'Kode pemasok (optional)',
  })
  @ApiQuery({
    name: 'name',
    required: false,
    description: 'Nama pemasok (optional)',
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
    return this.pemasokService.findByCodeOrName(
      code || '',
      name || '',
      page,
      limit,
    );
  }
}
