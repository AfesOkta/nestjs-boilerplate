import { Test, TestingModule } from '@nestjs/testing';
import { MerkController } from './merk.controller';

describe('MerkController', () => {
  let controller: MerkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MerkController],
    }).compile();

    controller = module.get<MerkController>(MerkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
