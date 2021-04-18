import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateRelationTables1618641109384 implements MigrationInterface {
    name = 'CreateRelationTables1618641109384'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "members" ADD "positionId" uuid`);
        await queryRunner.query(`ALTER TABLE "departaments" DROP CONSTRAINT "PK_4e2ca27f35e6aac0836a684321a"`);
        await queryRunner.query(`ALTER TABLE "departaments" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "departaments" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "departaments" ADD CONSTRAINT "PK_4e2ca27f35e6aac0836a684321a" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "departaments" DROP CONSTRAINT "UQ_0b072ba73f82e322c6d9a2720b7"`);
        await queryRunner.query(`ALTER TABLE "positions" DROP CONSTRAINT "PK_17e4e62ccd5749b289ae3fae6f3"`);
        await queryRunner.query(`ALTER TABLE "positions" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "positions" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "positions" ADD CONSTRAINT "PK_17e4e62ccd5749b289ae3fae6f3" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "positions" DROP CONSTRAINT "UQ_5c70dc5aa01e351730e4ffc929c"`);
        await queryRunner.query(`ALTER TABLE "members" DROP CONSTRAINT "PK_28b53062261b996d9c99fa12404"`);
        await queryRunner.query(`ALTER TABLE "members" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "members" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "members" ADD CONSTRAINT "PK_28b53062261b996d9c99fa12404" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "members" DROP CONSTRAINT "UQ_f05952a65232edc96f5f86b538e"`);
        await queryRunner.query(`ALTER TABLE "members" ALTER COLUMN "isBaptized" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3"`);
        await queryRunner.query(`ALTER TABLE "members" ADD CONSTRAINT "FK_3742c617bc0dc5b4dcdaf58bb93" FOREIGN KEY ("positionId") REFERENCES "positions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "members" DROP CONSTRAINT "FK_3742c617bc0dc5b4dcdaf58bb93"`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "id" NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "members" ALTER COLUMN "isBaptized" SET DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "members" ADD CONSTRAINT "UQ_f05952a65232edc96f5f86b538e" UNIQUE ("cpf")`);
        await queryRunner.query(`ALTER TABLE "members" DROP CONSTRAINT "PK_28b53062261b996d9c99fa12404"`);
        await queryRunner.query(`ALTER TABLE "members" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "members" ADD "id" NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "members" ADD CONSTRAINT "PK_28b53062261b996d9c99fa12404" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "positions" ADD CONSTRAINT "UQ_5c70dc5aa01e351730e4ffc929c" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "positions" DROP CONSTRAINT "PK_17e4e62ccd5749b289ae3fae6f3"`);
        await queryRunner.query(`ALTER TABLE "positions" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "positions" ADD "id" NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "positions" ADD CONSTRAINT "PK_17e4e62ccd5749b289ae3fae6f3" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "departaments" ADD CONSTRAINT "UQ_0b072ba73f82e322c6d9a2720b7" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "departaments" DROP CONSTRAINT "PK_4e2ca27f35e6aac0836a684321a"`);
        await queryRunner.query(`ALTER TABLE "departaments" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "departaments" ADD "id" NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "departaments" ADD CONSTRAINT "PK_4e2ca27f35e6aac0836a684321a" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "members" DROP COLUMN "positionId"`);
    }

}
