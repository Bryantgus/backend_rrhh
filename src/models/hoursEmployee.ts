import { Table, Column, Model, DataType, HasMany, Default, Unique, AllowNull, ForeignKey, BelongsTo} from "sequelize-typescript"
import Employee from "./employee";

@Table({
    tableName: 'hoursEmployee'
})

class HoursEmployee extends Model {
    @Column
    declare hours: number;

    @ForeignKey(() => Employee)
    @Column
    declare employeeId: number;

    @BelongsTo(() => Employee)
    declare employee: Employee
}

export default HoursEmployee