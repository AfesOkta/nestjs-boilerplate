import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSupplier1746287890439 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "suppliers" (
                    "id" serial4 NOT NULL,
                    "supp_code" varchar(15) NULL,
                    "supp_name" varchar(100) NULL,
                    "supp_address" varchar(250) NULL,
                    "supp_telp" varchar(15) NULL,
                    "supp_email" varchar(100) NULL,
                    "is_actived" bool NULL,
                    "createdBy" int8 NULL,
                    "updatedBy" int8 NULL,
                    "createdAt" timestamp DEFAULT now() NULL,
                    "updatedAt" timestamp DEFAULT now() NULL,
                    CONSTRAINT suppliers_key PRIMARY KEY (id)
                  );
                  CREATE INDEX "idx_suppliers_code_name"
                      ON "suppliers" (supp_code, supp_name);`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "suppliers" CASCADE ;`);
  }
}
