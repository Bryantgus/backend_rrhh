import { Table, Column, Model, DataType, HasMany, Default, Unique, AllowNull } from "sequelize-typescript"
import HoursEmployee from "./hoursEmployee"

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
}

export default Employee