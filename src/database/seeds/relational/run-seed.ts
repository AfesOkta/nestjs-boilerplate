import { NestFactory } from '@nestjs/core';
import { RoleSeedService } from './role/role-seed.service';
import { SeedModule } from './seed.module';
import { StatusSeedService } from './status/status-seed.service';
import { UserSeedService } from './user/user-seed.service';
import { GudangSeedService } from './gudang/gudang-seed.service';
import { SatuanSeedService } from './satuan/satuan-seed.service';
import { CurrencySeedService } from './currency/currency-seed.service';
import { JenisSeedService } from './jenis/jenis-seed.service';
import { MerkSeedService } from './merk/merk-seed.service';

const runSeed = async () => {
  const app = await NestFactory.create(SeedModule);

  // run
  await app.get(RoleSeedService).run();
  await app.get(StatusSeedService).run();
  await app.get(UserSeedService).run();
  await app.get(GudangSeedService).run();
  await app.get(SatuanSeedService).run();
  await app.get(CurrencySeedService).run();
  await app.get(MerkSeedService).run();
  await app.get(JenisSeedService).run();
  await app.close();
};

void runSeed();
