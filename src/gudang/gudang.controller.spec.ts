import { Test, TestingModule } from '@nestjs/testing';
import { GudangController } from './gudang.controller';

describe('GudangController', () => {
  let controller: GudangController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GudangController],
    }).compile();

    controller = module.get<GudangController>(GudangController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
