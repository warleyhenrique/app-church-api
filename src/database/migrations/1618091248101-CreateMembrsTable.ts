import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateMembrsTable1618091248101 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: 'members',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'fullName',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'birthDay',
            type: 'date',
          },
          {
            name: 'rg',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'cpf',
            type: 'varchar',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'fatherName',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'motherName',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'isBaptized',
            type: 'boolean',
            default: true,
          },
          {
            name: 'baptizedDate',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'memberNumber',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'phoneNumber',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'streetAddress',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'numberAddress',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'neighborhoodAddress',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'cityAddress',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'stateAddress',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updateAt',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('members');
  }
}
