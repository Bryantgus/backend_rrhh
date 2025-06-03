import { Table, Column, Model, DataType, HasMany, HasOne, AllowNull, ForeignKey, BelongsTo } from "sequelize-typescript";
import Employee from "./employee";
import Salario from "./salario";

@Table({
    tableName: 'cargo'
})
class Cargo extends Model {
    @AllowNull(false)
    @Column(DataType.TEXT)
    declare cargo: string;

    @HasMany(() => Employee)
    declare employees: Employee[];

    @ForeignKey(() => Salario)
    @Column
    declare salarioId: number;

    @BelongsTo(() => Salario)
    declare salario: Salario;
}

export default Cargo;
