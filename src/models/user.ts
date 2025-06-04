import { Table, Column, Model, DataType, HasMany, Default, Unique, AllowNull, ForeignKey, BelongsTo } from "sequelize-typescript"

@Table({
    tableName: 'employee'
})

class Employee extends Model {
    @AllowNull(false)
    @Column({
        type: DataType.TEXT
    })
    declare user: string

    @Column({
        type: DataType.TEXT
    })
    declare password: string

    @Column({
        type: DataType.TEXT
    })
    declare name: string

    @Column({
        type: DataType.TEXT
    })
    declare lastName: string   

    @Column({
        type: DataType.TEXT
    })
    declare token: string   

    
    
}

export default Employee