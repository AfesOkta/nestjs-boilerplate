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
import { CurrencyService } from './currency.service';
import { Currency } from './entities/currency.entity';
import { CreateCurrencyDto } from './dto/currency-create.dto';
import { InfinityPaginationResponse } from '../utils/dto/infinity-pagination-response.dto';
import { UpdateCurrencyDto } from './dto/currency-update.dto';

@ApiBearerAuth()
@Roles(RoleEnum.admin)
@UseGuards(AuthGuard('jwt'), RolesGuard)
@ApiTags('Currency')
@Controller({
  path: 'currency',
  version: '1',
})
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}
  @ApiCreatedResponse({
    type: Currency,
  })
  @SerializeOptions({
    groups: ['admin'],
  })
  @Post()
  create(
    @Body() createCurrencyDto: CreateCurrencyDto,
    @Req() request: Request,
  ) {
    console.log('DTO:', createCurrencyDto);
    const userId = (request as any).user?.id; // Assuming `request.user` contains the session user
    createCurrencyDto.createdBy = userId;
    createCurrencyDto.createdAt = new Date();
    return this.currencyService.create(createCurrencyDto);
  }

  @ApiOkResponse({
    type: InfinityPaginationResponse(Currency),
  })
  @SerializeOptions({
    groups: ['admin'],
  })
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.currencyService.findAll();
  }

  @ApiOkResponse({
    type: Currency,
  })
  @SerializeOptions({
    groups: ['admin'],
  })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'id',
    description: 'ID of the Currency',
    type: 'number',
    required: true,
    example: 1,
  })
  findOne(@Param('id') id: string) {
    return this.currencyService.findOne(+id);
  }

  @ApiOkResponse({
    type: Currency,
  })
  @SerializeOptions({
    groups: ['admin'],
  })
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'id',
    description: 'ID of the Currency',
    type: 'number',
    required: true,
    example: 1,
  })
  update(
    @Param('id') id: string,
    @Body() updateCurrencyDto: UpdateCurrencyDto,
    @Req() request: Request,
  ) {
    updateCurrencyDto.updatedBy = (request as any).user?.id; // Assuming `request.user` contains the session user
    updateCurrencyDto.updatedAt = new Date();
    console.log('DTO:', updateCurrencyDto);
    return this.currencyService.update(+id, updateCurrencyDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.currencyService.remove(+id);
  }
}
