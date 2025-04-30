import { Test, TestingModule } from '@nestjs/testing';
import { ProductsTypeController } from './products-type.controller';

describe('ProductsTypeController', () => {
  let controller: ProductsTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsTypeController],
    }).compile();

    controller = module.get<ProductsTypeController>(ProductsTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
