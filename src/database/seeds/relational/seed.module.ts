import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DataSource, DataSourceOptions } from 'typeorm';
import { TypeOrmConfigService } from '../../typeorm-config.service';
import { RoleSeedModule } from './role/role-seed.module';
import { StatusSeedModule } from './status/status-seed.module';
import { UserSeedModule } from './user/user-seed.module';
import databaseConfig from '../../config/database.config';
import appConfig from '../../../config/app.config';
import { GudangSeedModule } from './gudang/gudang-seed.module';
import { SatuanSeedModule } from './satuan/satuan-seed.module';
import { CurrencySeedModule } from './currency/currency-seed.module';
import { MerkSeedModule } from './merk/merk-seed.module';
import { JenisSeedModule } from './jenis/jenis-seed.module';
import { GolonganSeedModule } from './golongan/golongan-seed.module';
import { ProductsTypeSeedModule } from './products-type/products-type-seed.module';

@Module({
  imports: [
    RoleSeedModule,
    StatusSeedModule,
    UserSeedModule,
    GudangSeedModule,
    SatuanSeedModule,
    CurrencySeedModule,
    MerkSeedModule,
    JenisSeedModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, appConfig],
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      dataSourceFactory: async (options: DataSourceOptions) => {
        return new DataSource(options).initialize();
      },
    }),
    GolonganSeedModule,
    ProductsTypeSeedModule,
  ],
})
export class SeedModule {}
