import { Table, Column, Model, DataType, HasMany, Default, Unique, AllowNull } from "sequelize-typescript"
import Employee from "./employee";

@Table({
    tableName: 'cargo'
})

class Cargo extends Model {
    @AllowNull(false)
    @Column({
        type: DataType.TEXT
    })
    declare cargo: string

    @HasMany(() => Employee)
    declare employees: Employee[];
}

export default Cargo