import { Test, TestingModule } from '@nestjs/testing';
import { MerkService } from './merk.service';

describe('MerkService', () => {
  let service: MerkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MerkService],
    }).compile();

    service = module.get<MerkService>(MerkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
