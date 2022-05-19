import {MigrationInterface, QueryRunner} from "typeorm";

export class init1652922708794 implements MigrationInterface {
    name = 'init1652922708794'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pair_price" ("id" SERIAL NOT NULL, "pair" character varying NOT NULL, "price" double precision NOT NULL, "cost" double precision NOT NULL, "remaining" double precision NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "active" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_7b7862cc5279ee67c53fc0e12e8" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "pair_price"`);
    }

}
