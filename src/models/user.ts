import { Table, Column, Model, DataType, HasMany, Default, Unique, AllowNull, ForeignKey, BelongsTo } from "sequelize-typescript"

@Table({
    tableName: 'user'
})

class User extends Model {
    
    @Column({
        type: DataType.TEXT
    })
    declare fullName: string

    @Column({
        type: DataType.TEXT
    })
    declare password: string

    @Column({
        type: DataType.TEXT
    })
    declare cedula: string   

    @AllowNull(true)
    @Column({
        type: DataType.TEXT || null
    })
    declare token: string   

    
    
}

export default User