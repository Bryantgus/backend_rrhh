import { Table, Column, Model, ForeignKey, BelongsTo, DataType, HasOne } from "sequelize-typescript";
import Cargo from "./cargo";

@Table({
    tableName: 'salario'
})
class Salario extends Model {
    @Column(DataType.FLOAT)
    declare salario: number;

    @HasOne(() => Cargo)
    declare cargo: Cargo;
}

export default Salario;
