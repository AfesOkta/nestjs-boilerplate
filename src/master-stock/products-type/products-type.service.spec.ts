import { Test, TestingModule } from '@nestjs/testing';
import { ProductsTypeService } from './products-type.service';

describe('ProductsTypeService', () => {
  let service: ProductsTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsTypeService],
    }).compile();

    service = module.get<ProductsTypeService>(ProductsTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
