import { BuildingSchema } from '#database/schema'
import Room from './room.ts'
import Campus from './campus.ts'
import { beforeCreate, hasMany, column, belongsTo } from '@adonisjs/lucid/orm'
import type { HasMany, BelongsTo } from '@adonisjs/lucid/types/relations'
import { randomUUID } from 'node:crypto'

export default class Building extends BuildingSchema {
  @column({ isPrimary: true })
  declare id: string

  @hasMany(() => Room)
  declare rooms: HasMany<typeof Room>

  @belongsTo(() => Campus)
  declare campus: BelongsTo<typeof Campus>

  @beforeCreate()
  static assignUuid(model: Building) {
    model.id = model.id || randomUUID()
  }
}