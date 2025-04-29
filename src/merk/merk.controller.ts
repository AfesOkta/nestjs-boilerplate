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
import { Roles } from '../roles/roles.decorator';
import { RoleEnum } from '../roles/roles.enum';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../roles/roles.guard';
import { MerkService } from './merk.service';
import { CreatedMerkDto } from './dto/create-merk.dto';
import { Merk } from './enitites/merk.entity';
import { UpdateMerkDto } from './dto/update-merk.dto';
import { InfinityPaginationResponse } from '../utils/dto/infinity-pagination-response.dto';

@ApiBearerAuth()
@Roles(RoleEnum.admin)
@UseGuards(AuthGuard('jwt'), RolesGuard)
@ApiTags('Merk')
@Controller({
  path: 'merk',
  version: '1',
})
export class MerkController {
  constructor(private readonly merkService: MerkService) {}

  // Define your endpoints here//
  @ApiCreatedResponse({
    type: Merk,
  })
  @SerializeOptions({
    groups: ['admin'],
  })
  @Post()
  create(@Body() createMerkDto: CreatedMerkDto, @Req() request: Request) {
    console.log('DTO:', createMerkDto);
    const userId = (request as any).user?.id; // Assuming `request.user` contains the session user
    createMerkDto.createdBy = userId;
    createMerkDto.createdAt = new Date();
    return this.merkService.create(createMerkDto);
  }

  @ApiOkResponse({
    type: InfinityPaginationResponse(Merk),
  })
  @SerializeOptions({
    groups: ['admin'],
  })
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.merkService.findAll();
  }

  @ApiOkResponse({
    type: Merk,
  })
  @SerializeOptions({
    groups: ['admin'],
  })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'id',
    description: 'ID of the merk',
    type: 'number',
    required: true,
    example: 1,
  })
  findOne(@Param('id') id: string) {
    return this.merkService.findOne(+id);
  }

  @ApiOkResponse({
    type: Merk,
  })
  @SerializeOptions({
    groups: ['admin'],
  })
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'id',
    description: 'ID of the merk',
    type: 'number',
    required: true,
    example: 1,
  })
  update(
    @Param('id') id: string,
    @Body() updatemerkDto: UpdateMerkDto,
    @Req() request: Request,
  ) {
    updatemerkDto.updatedBy = (request as any).user?.id; // Assuming `request.user` contains the session user
    updatemerkDto.updatedAt = new Date();
    console.log('DTO:', updatemerkDto);
    return this.merkService.update(+id, updatemerkDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.merkService.remove(+id);
  }
}
