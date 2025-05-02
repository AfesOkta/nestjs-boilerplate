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
import { ProductsService } from './products.service';
import { Product } from './entities/products.entity';
import { CreatedProductDto } from './dto/created-product.dto';
import { InfinityPaginationResponse } from '../../utils/dto/infinity-pagination-response.dto';
import { UpdatedProductDto } from './dto/updated-product.dto';

@ApiBearerAuth()
@Roles(RoleEnum.admin, RoleEnum.user) // Pass the roles as separate arguments
@UseGuards(AuthGuard('jwt'), RolesGuard)
@ApiTags('Products')
@Controller({
  path: 'products',
  version: '1',
})
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @ApiCreatedResponse({
    type: Product,
  })
  @SerializeOptions({
    groups: ['admin', 'user'],
  })
  @Post()
  create(@Body() createProductDto: CreatedProductDto, @Req() request: Request) {
    console.log('DTO:', createProductDto);
    const userId = (request as any).user?.id; // Assuming `request.user` contains the session user
    createProductDto.createdBy = userId;
    createProductDto.createdAt = new Date();
    return this.productService.create(createProductDto);
  }

  @ApiOkResponse({
    type: InfinityPaginationResponse(Product),
  })
  @SerializeOptions({
    groups: ['admin', 'user'],
  })
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.productService.findAll();
  }

  @ApiOkResponse({
    type: Product,
  })
  @SerializeOptions({
    groups: ['admin', 'user'],
  })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'id',
    description: 'ID of the Product',
    type: 'number',
    required: true,
    example: 1,
  })
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @ApiOkResponse({
    type: Product,
  })
  @SerializeOptions({
    groups: ['admin', 'user'],
  })
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'id',
    description: 'ID of the Product',
    type: 'number',
    required: true,
    example: 1,
  })
  update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdatedProductDto,
    @Req() request: Request,
  ) {
    updateProductDto.updatedBy = (request as any).user?.id; // Assuming `request.user` contains the session user
    updateProductDto.updatedAt = new Date();
    console.log('DTO:', updateProductDto);
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
