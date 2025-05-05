import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { AuthModule } from './auth/auth.module';
import databaseConfig from './database/config/database.config';
import authConfig from './auth/config/auth.config';
import appConfig from './config/app.config';
import mailConfig from './mail/config/mail.config';
import fileConfig from './files/config/file.config';
import facebookConfig from './auth-facebook/config/facebook.config';
import googleConfig from './auth-google/config/google.config';
import path from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthFacebookModule } from './auth-facebook/auth-facebook.module';
import { AuthGoogleModule } from './auth-google/auth-google.module';
import { HeaderResolver, I18nModule } from 'nestjs-i18n';
import { TypeOrmConfigService } from './database/typeorm-config.service';
import { MailModule } from './mail/mail.module';
import { HomeModule } from './home/home.module';
import { DataSource, DataSourceOptions } from 'typeorm';
import { AllConfigType } from './config/config.type';
import { SessionModule } from './session/session.module';
import { MailerModule } from './mailer/mailer.module';
import { CabangModule } from './master-global/cabang/cabang.module';
import { GudangModule } from './master-stock/gudang/gudang.module';
import { CurrencyModule } from './master-global/currency/currency.module';
import { MerkModule } from './master-stock/merk/merk.module';
import { JenisModule } from './master-stock/jenis/jenis.module';
import { GolonganModule } from './master-stock/golongan/golongan.module';
import { SatuanModule } from './master-stock/satuan/satuan.module';
import { ProductsTypeModule } from './master-stock/products-type/products-type.module';
import { ProductsModule } from './master-stock/products/products.module';
import { PelangganModule } from './master-ar/pelanggan/pelanggan.module';
import { SupplierModule } from './module-ap/supplier/supplier.module';

const infrastructureDatabaseModule = TypeOrmModule.forRootAsync({
  useClass: TypeOrmConfigService,
  dataSourceFactory: async (options: DataSourceOptions) => {
    return new DataSource({
      ...options,
      logging: true,
      logger: 'advanced-console',
    }).initialize();
  },
});

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        databaseConfig,
        authConfig,
        appConfig,
        mailConfig,
        fileConfig,
        facebookConfig,
        googleConfig,
      ],
      envFilePath: [`.env.${process.env.NODE_ENV}`, '.env'],
    }),
    infrastructureDatabaseModule,
    I18nModule.forRootAsync({
      useFactory: (configService: ConfigService<AllConfigType>) => ({
        fallbackLanguage: configService.getOrThrow('app.fallbackLanguage', {
          infer: true,
        }),
        loaderOptions: { path: path.join(__dirname, '/i18n/'), watch: true },
      }),
      resolvers: [
        {
          use: HeaderResolver,
          useFactory: (configService: ConfigService<AllConfigType>) => {
            return [
              configService.get('app.headerLanguage', {
                infer: true,
              }),
            ];
          },
          inject: [ConfigService],
        },
      ],
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
    UsersModule,
    FilesModule,
    AuthModule,
    AuthFacebookModule,
    AuthGoogleModule,
    SessionModule,
    MailModule,
    MailerModule,
    CabangModule,
    GudangModule,
    CurrencyModule,
    MerkModule,
    JenisModule,
    GolonganModule,
    SatuanModule,
    MerkModule,
    ProductsTypeModule,
    ProductsModule,
    PelangganModule,
    SupplierModule,
    HomeModule,
  ],
})
export class AppModule {}
