import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { GudangSeedService } from "./gudang-seed.service";
import { Gudang } from "../../../../gudang/entities/gudang.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Gudang])],
    providers: [GudangSeedService],
    exports: [GudangSeedService],
})
export class GudangSeedModule {}