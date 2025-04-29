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
import { RoleEnum } from '../roles/roles.enum';
import { Roles } from '../roles/roles.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../roles/roles.guard';
import { JenisService } from './jenis.service';
import { Jenis } from './entities/jenis.entity';
import { CreatedJenisDto } from './dto/created-jenis.dto';
import { InfinityPaginationResponse } from '../utils/dto/infinity-pagination-response.dto';
import { UpdatedJenisDto } from './dto/updated-jenis.dto';

@ApiBearerAuth()
@Roles(RoleEnum.admin)
@UseGuards(AuthGuard('jwt'), RolesGuard)
@ApiTags('Jenis')
@Controller({
  path: 'jenis',
  version: '1',
})
export class JenisController {
  constructor(private readonly jenisService: JenisService) {}

  @ApiCreatedResponse({
    type: Jenis,
  })
  @SerializeOptions({
    groups: ['admin'],
  })
  @Post()
  create(@Body() createJenisDto: CreatedJenisDto, @Req() request: Request) {
    console.log('DTO:', createJenisDto);
    const userId = (request as any).user?.id; // Assuming `request.user` contains the session user
    createJenisDto.createdBy = userId;
    createJenisDto.createdAt = new Date();
    return this.jenisService.create(createJenisDto);
  }

  @ApiOkResponse({
    type: InfinityPaginationResponse(Jenis),
  })
  @SerializeOptions({
    groups: ['admin'],
  })
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.jenisService.findAll();
  }

  @ApiOkResponse({
    type: Jenis,
  })
  @SerializeOptions({
    groups: ['admin'],
  })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'id',
    description: 'ID of the Jenis',
    type: 'number',
    required: true,
    example: 1,
  })
  findOne(@Param('id') id: string) {
    return this.jenisService.findOne(+id);
  }

  @ApiOkResponse({
    type: Jenis,
  })
  @SerializeOptions({
    groups: ['admin'],
  })
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'id',
    description: 'ID of the Jenis',
    type: 'number',
    required: true,
    example: 1,
  })
  update(
    @Param('id') id: string,
    @Body() updateJenisDto: UpdatedJenisDto,
    @Req() request: Request,
  ) {
    updateJenisDto.updatedBy = (request as any).user?.id; // Assuming `request.user` contains the session user
    updateJenisDto.updatedAt = new Date();
    console.log('DTO:', updateJenisDto);
    return this.jenisService.update(+id, updateJenisDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.jenisService.remove(+id);
  }
}
