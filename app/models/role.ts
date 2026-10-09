import { RoleSchema } from '#database/schema'
import { beforeCreate, hasMany, column } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { randomUUID } from 'node:crypto'
import User from './user.ts'

export default class Role extends RoleSchema {
    @column({ isPrimary: true })
    declare id: string

    @hasMany(() => User)
    declare users: HasMany<typeof User>

    @beforeCreate()
    static assignUuid(model: Role) {
        model.id = model.id || randomUUID()
    }
}