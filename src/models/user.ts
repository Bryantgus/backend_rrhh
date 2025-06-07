import { Table, Column, Model, DataType, HasMany, Default, Unique, AllowNull, ForeignKey, BelongsTo } from "sequelize-typescript"

@Table({
    tableName: 'user'
})

class User extends Model {
    
    @Column({
        type: DataType.TEXT
    })
    declare user: string

    @Column({
        type: DataType.TEXT
    })
    declare password: string     
    
}

export default User