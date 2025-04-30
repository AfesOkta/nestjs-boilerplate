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
import { Roles } from '../../roles/roles.decorator';
import { RoleEnum } from '../../roles/roles.enum';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../../roles/roles.guard';
import { Satuan } from './entities/satuan.entity';
import { SatuanService } from './satuan.service';
import { CreatedSatuanDto } from './dto/create-satuan.dto';
import { UpdateSatuanDto } from './dto/update-satuan.dto';
import { InfinityPaginationResponse } from '../../utils/dto/infinity-pagination-response.dto';

@ApiBearerAuth()
@Roles(RoleEnum.admin)
@UseGuards(AuthGuard('jwt'), RolesGuard)
@ApiTags('Satuan')
@Controller({
  path: 'satuan',
  version: '1',
})
export class SatuanController {
  constructor(private readonly satuanService: SatuanService) {}
  @ApiCreatedResponse({
    type: Satuan,
  })
  @SerializeOptions({
    groups: ['admin'],
  })
  @Post()
  create(@Body() createSatuanDto: CreatedSatuanDto, @Req() request: Request) {
    console.log('DTO:', createSatuanDto);
    const userId = (request as any).user?.id; // Assuming `request.user` contains the session user
    createSatuanDto.createdBy = userId;
    createSatuanDto.createdAt = new Date();
    return this.satuanService.create(createSatuanDto);
  }

  @ApiOkResponse({
    type: InfinityPaginationResponse(Satuan),
  })
  @SerializeOptions({
    groups: ['admin'],
  })
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.satuanService.findAll();
  }

  @ApiOkResponse({
    type: Satuan,
  })
  @SerializeOptions({
    groups: ['admin'],
  })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'id',
    description: 'ID of the satuan',
    type: 'number',
    required: true,
    example: 1,
  })
  findOne(@Param('id') id: string) {
    return this.satuanService.findOne(+id);
  }

  @ApiOkResponse({
    type: Satuan,
  })
  @SerializeOptions({
    groups: ['admin'],
  })
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'id',
    description: 'ID of the satuan',
    type: 'number',
    required: true,
    example: 1,
  })
  update(
    @Param('id') id: string,
    @Body() updatesatuanDto: UpdateSatuanDto,
    @Req() request: Request,
  ) {
    updatesatuanDto.updatedBy = (request as any).user?.id; // Assuming `request.user` contains the session user
    updatesatuanDto.updatedAt = new Date();
    console.log('DTO:', updatesatuanDto);
    return this.satuanService.update(+id, updatesatuanDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.satuanService.remove(+id);
  }
}
