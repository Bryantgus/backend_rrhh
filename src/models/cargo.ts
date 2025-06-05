import { Table, Column, Model, DataType, HasMany, HasOne, AllowNull, ForeignKey, BelongsTo } from "sequelize-typescript";
import Employee from "./employee";

@Table({
    tableName: 'cargo'
})
class Cargo extends Model {
    @AllowNull(false)
    @Column(DataType.TEXT)
    declare cargo: string;

    @HasMany(() => Employee)
    declare employees: Employee[];

    @Column(DataType.FLOAT)
    declare salario: number;
}

export default Cargo;
