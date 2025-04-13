import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCabang1744522892125 implements MigrationInterface {
  name = 'CreateCabang1744522892125';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "cabang" ("id" serial NOT NULL, "name" character varying NOT NULL,"createdBy" int8, "createdAt" TIMESTAMP NOT NULL DEFAULT now(),"updatedBy" int8, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "cabang" ;`);
  }
}
