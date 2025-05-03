import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePelanggan1746169954421 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "customers" (
              "id" serial4 NOT NULL,
              "cust_code" varchar(15) NULL,
              "cust_name" varchar(100) NULL,
              "cust_address" varchar(250) NULL,
              "cust_telp" varchar(15) NULL,
              "cust_email" varchar(100) NULL,
              "is_actived" bool NULL,
              "createdBy" int8 NULL,
              "updatedBy" int8 NULL,
              "createdAt" timestamp DEFAULT now() NULL,
              "updatedAt" timestamp DEFAULT now() NULL,
              CONSTRAINT customer_key PRIMARY KEY (id)
            );
            CREATE INDEX "idx_customer_code_name"
                ON "customers" (cust_code, cust_name);`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "customers" CASCADE ;`);
  }
}
