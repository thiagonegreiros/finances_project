import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAccounts1616960262529 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "accounts",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "price",
            type: "numeric(10,2)",
          },
          {
            name: "qty_portion",
            type: "int",
          },
          {
            name: "due_date",
            type: "date",
          },
          {
            name: "status_account",
            type: "boolean",
          },
          {
            name: "category_id",
            type: "uuid",
          },
          {
            name: "update_at",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            referencedTableName: "category",
            referencedColumnNames: ["id"],
            columnNames: ["category_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("accounts");
  }
}
