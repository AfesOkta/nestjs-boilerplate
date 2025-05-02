import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProductType1746000619276 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "products_type" (
              "id" serial4 NOT NULL,
              "name" varchar(250) NULL,              
              "createdBy" int8 NULL,
              "updatedBy" int8 NULL,
              "createdAt" timestamp DEFAULT now() NULL,
              "updatedAt" timestamp DEFAULT now() NULL,
              CONSTRAINT products_type_key PRIMARY KEY (id)
            );`,
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "products_type" CASCADE ;`);
    }

}
