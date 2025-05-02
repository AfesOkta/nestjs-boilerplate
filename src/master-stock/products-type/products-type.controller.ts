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
import { ProductsTypeService } from './products-type.service';
import { CreatedProductTypeDto } from './dto/created-product-type.dto';
import { InfinityPaginationResponse } from '../../utils/dto/infinity-pagination-response.dto';
import { ProductType } from './entities/products-type.entity';
import { UpdatedProductTypeDto } from './dto/updated-product-type.dto';
@ApiBearerAuth()
@Roles(RoleEnum.admin)
@UseGuards(AuthGuard('jwt'), RolesGuard)
@ApiTags('Product Type')
@Controller({
  path: 'products-type',
  version: '1',
})
export class ProductsTypeController {
  constructor(private readonly productTypeService: ProductsTypeService) {}

  @ApiCreatedResponse({
    type: ProductType,
  })
  @SerializeOptions({
    groups: ['admin'],
  })
  @Post()
  create(
    @Body() createProductTypeDto: CreatedProductTypeDto,
    @Req() request: Request,
  ) {
    console.log('DTO:', createProductTypeDto);
    const userId = (request as any).user?.id; // Assuming `request.user` contains the session user
    createProductTypeDto.createdBy = userId;
    createProductTypeDto.createdAt = new Date();
    return this.productTypeService.create(createProductTypeDto);
  }

  @ApiOkResponse({
    type: InfinityPaginationResponse(ProductType),
  })
  @SerializeOptions({
    groups: ['admin'],
  })
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.productTypeService.findAll();
  }

  @ApiOkResponse({
    type: ProductType,
  })
  @SerializeOptions({
    groups: ['admin'],
  })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'id',
    description: 'ID of the ProductType',
    type: 'number',
    required: true,
    example: 1,
  })
  findOne(@Param('id') id: string) {
    return this.productTypeService.findOne(+id);
  }

  @ApiOkResponse({
    type: ProductType,
  })
  @SerializeOptions({
    groups: ['admin'],
  })
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'id',
    description: 'ID of the ProductType',
    type: 'number',
    required: true,
    example: 1,
  })
  update(
    @Param('id') id: string,
    @Body() updateProductTypeDto: UpdatedProductTypeDto,
    @Req() request: Request,
  ) {
    updateProductTypeDto.updatedBy = (request as any).user?.id; // Assuming `request.user` contains the session user
    updateProductTypeDto.updatedAt = new Date();
    console.log('DTO:', updateProductTypeDto);
    return this.productTypeService.update(+id, updateProductTypeDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.productTypeService.remove(+id);
  }
}
