import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1624418892886 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "user",
                columns: [
                    {
                        name: "id",
                        type: "varchar(36)",
                        isPrimary: true,
                    },

                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name: "password",
                        type: "varchar"
                    },
                    {
                        name: "isAdmin",
                        type: "tinyint",
                    },

                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },

                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }

                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user")
    }
}
