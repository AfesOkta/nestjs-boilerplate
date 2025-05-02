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
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { RoleEnum } from '../../roles/roles.enum';
import { Roles } from '../../roles/roles.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../../roles/roles.guard';
import { GolonganService } from './golongan.service';
import { Golongan } from './entities/golongan.entity';
import { CreatedGolonganDto } from './dto/created-golongan.dto';
import { InfinityPaginationResponse } from '../../utils/dto/infinity-pagination-response.dto';
import { UpdatedGolonganDto } from './dto/updated-golongan.dto';

@ApiBearerAuth()
@Roles(RoleEnum.admin)
@UseGuards(AuthGuard('jwt'), RolesGuard)
@ApiTags('Golongan')
@Controller({
  path: 'golongan',
  version: '1',
})
export class GolonganController {
  constructor(private readonly golonganService: GolonganService) {}
  @ApiCreatedResponse({
    type: Golongan,
  })
  @SerializeOptions({
    groups: ['admin'],
  })
  @Post()
  create(
    @Body() createGolonganDto: CreatedGolonganDto,
    @Req() request: Request,
  ) {
    console.log('DTO:', createGolonganDto);
    const userId = (request as any).user?.id; // Assuming `request.user` contains the session user
    createGolonganDto.createdBy = userId;
    createGolonganDto.createdAt = new Date();
    return this.golonganService.create(createGolonganDto);
  }

  @ApiOkResponse({
    type: InfinityPaginationResponse(Golongan),
  })
  @SerializeOptions({
    groups: ['admin'],
  })
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.golonganService.findAll();
  }

  @ApiOkResponse({
    type: Golongan,
  })
  @SerializeOptions({
    groups: ['admin'],
  })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'id',
    description: 'ID of the Golongan',
    type: 'number',
    required: true,
    example: 1,
  })
  findOne(@Param('id') id: string) {
    return this.golonganService.findOne(+id);
  }

  @ApiOkResponse({
    type: Golongan,
  })
  @SerializeOptions({
    groups: ['admin'],
  })
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'id',
    description: 'ID of the Golongan',
    type: 'number',
    required: true,
    example: 1,
  })
  update(
    @Param('id') id: string,
    @Body() updateGolonganDto: UpdatedGolonganDto,
    @Req() request: Request,
  ) {
    updateGolonganDto.updatedBy = (request as any).user?.id; // Assuming `request.user` contains the session user
    updateGolonganDto.updatedAt = new Date();
    console.log('DTO:', updateGolonganDto);
    return this.golonganService.update(+id, updateGolonganDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.golonganService.remove(+id);
  }
}
