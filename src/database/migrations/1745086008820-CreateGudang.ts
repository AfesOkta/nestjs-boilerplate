import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateGudang1745086008820 implements MigrationInterface {
  name = 'CreateGudang1745086008820';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "gudang" ("id" serial NOT NULL, "name" character varying NOT NULL,actived character varying(1) default 'Y', "createdBy" int8, "createdAt" TIMESTAMP NOT NULL DEFAULT now(),"updatedBy" int8, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "gudang" ;`);
  }
}
