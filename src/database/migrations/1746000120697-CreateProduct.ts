import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProduct1746000120697 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "products" (
              "id" serial4 NOT NULL,
              "product_code" varchar(25) NULL,
              "product_name" varchar(250) NULL,
              "product_barcode" varchar(100) NULL,
              "product_type" int8 NULL,
              "product_unit" int8 NULL,
              "product_purchase_price" decimal(10,0) NULL DEFAULT 0,
              "product_sales_price" decimal(10,0) NULL DEFAULT 0,
              "product_margin" decimal(10,0) NULL DEFAULT 0,
              "product_cogs" decimal(10,0) NULL DEFAULT 0,
              "is_active" bool NULL,
              "createdBy" int8 NULL,
              "updatedBy" int8 NULL,
              "createdAt" timestamp DEFAULT now() NULL,
              "updatedAt" timestamp DEFAULT now() NULL,
              CONSTRAINT products_key PRIMARY KEY (id)
            );
            CREATE INDEX "idx_product_code_name_barcode"
                ON "products" (product_code, product_name, product_barcode);
            
            COMMENT ON COLUMN "products"."product_type" IS 'relasi terhadap table type.id';
            COMMENT ON COLUMN "products"."product_unit" IS 'relasi terhadap table satuan.id';`,
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "products" CASCADE ;`);
    }

}
