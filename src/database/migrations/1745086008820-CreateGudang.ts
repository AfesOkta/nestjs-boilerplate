import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateGudang1745086008820 implements MigrationInterface {
  name = 'CreateGudang1745086008820';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE gudang (
        id serial4 NOT NULL,
        "name" varchar NULL,
        is_default bool NULL,
        is_active bool NULL,
        createdBy integer NULL,
        updatedBy integer NULL,
        createdAt timestamp DEFAULT now() NULL,
        updatedAt timestamp DEFAULT now() NULL,
        CONSTRAINT m_gudang_pkey PRIMARY KEY (id)
      );`,
    );
    await queryRunner.query(
      `CREATE TABLE jenis (
        id serial4 NOT NULL,
        "name" varchar NULL,
        is_base bool NULL,
        createdBy integer NULL,
        updatedBy integer NULL,
        createdAt timestamp DEFAULT now() NULL,
        updatedAt timestamp DEFAULT now() NULL,
        CONSTRAINT m_jenis_pkey PRIMARY KEY (id)
      );`,
    );
    await queryRunner.query(
      `CREATE TABLE merk (
        id serial4 NOT NULL,
        "name" varchar NULL,
        is_active bool NULL,
        createdBy integer NULL,
        updatedBy integer NULL,
        createdAt timestamp DEFAULT now() NULL,
        updatedAt timestamp DEFAULT now() NULL,
        CONSTRAINT m_merk_pkey PRIMARY KEY (id)
      );`,
    );
    await queryRunner.query(
      `CREATE TABLE satuan (
        id serial4 NOT NULL,
        "name" varchar NULL,
        symbol varchar NULL,
        is_base bool NULL,
        createdBy integer NULL,
        updatedBy integer NULL,
        createdAt timestamp DEFAULT now() NULL,
        updatedAt timestamp DEFAULT now() NULL,
        CONSTRAINT m_satuan_pkey PRIMARY KEY (id)
      );`,
    );
    await queryRunner.query(`
      CREATE TABLE currency (
        id serial4 NOT NULL,
        "name" varchar NULL,
        symbol varchar NULL,
        rate numeric NULL,
        is_base bool NULL,
        createdBy integer NULL,
        updatedBy integer NULL,
        createdAt timestamp DEFAULT now() NULL,
        updatedAt timestamp DEFAULT now() NULL,
        CONSTRAINT m_currency_pkey PRIMARY KEY (id)
      );`);
    await queryRunner.query(`
      CREATE TABLE golongan (
        id serial4 NOT NULL,
        "name" varchar NULL,
        is_active bool NULL,
        createdBy integer NULL,
        updatedBy integer NULL,
        createdAt timestamp DEFAULT now() NULL,
        updatedAt timestamp DEFAULT now() NULL,
        CONSTRAINT m_golongan_pkey PRIMARY KEY (id)
      );`);
    await queryRunner.query(`
      CREATE TABLE t_system_config (
        id serial4 NOT NULL,
        apps_name varchar NULL,
        apps_logo varchar NULL,
        multi_gudang bool DEFAULT false NULL,
        multi_currency bool DEFAULT false NULL,
        multi_stock bool DEFAULT false NULL,
        metode_persedian int2 DEFAULT 0 NULL,
        use_barcode bool DEFAULT false NULL,
        CONSTRAINT "CHK_metode_persedian" CHECK ((metode_persedian = ANY (ARRAY[0, 1, 2]))),
        CONSTRAINT t_system_config_pkey PRIMARY KEY (id)
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "gudang" ;`);
    await queryRunner.query(`DROP TABLE "jenis" ;`);
    await queryRunner.query(`DROP TABLE "merk" ;`);
    await queryRunner.query(`DROP TABLE "satuan" ;`);
    await queryRunner.query(`DROP TABLE "currency" ;`);
    await queryRunner.query(`DROP TABLE "golongan" ;`);
  }
}
