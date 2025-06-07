import { Table, Column, Model, DataType, HasMany, Default, Unique, AllowNull, ForeignKey, BelongsTo } from "sequelize-typescript"
import HoursEmployee from "./hoursEmployee"
import Cargo from "./cargo";

@Table({
    tableName: 'employee'
})

class Employee extends Model {
    @AllowNull(false)
    @Column({
        type: DataType.TEXT
    })
    declare fullName: string

    @HasMany(() => HoursEmployee)
    hourLogs: HoursEmployee[]
    
    @ForeignKey(() => Cargo)
    @AllowNull(true)
    @Column
    declare cargoId: number | null;

    @BelongsTo(() => Cargo)
    declare cargo: Cargo;

    @Column({
        type: DataType.TEXT
    })
    declare cedula: string 

}

export default Employee