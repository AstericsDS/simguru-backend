import { BuildingSchema } from '#database/schema'
import Room from '#models/room'
import { beforeCreate, hasMany, column, belongsTo } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { randomUUID } from 'node:crypto'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Campus from '#models/campus'

export default class Building extends BuildingSchema {
  @column({ isPrimary: true })
  declare id: string

  @hasMany(() => Room)
  declare rooms: HasMany<typeof Room>

  @beforeCreate()
  static assignUuid(model: Building) {
    model.id = model.id || randomUUID()
  }

  @belongsTo(() => Campus)
  declare campus: BelongsTo<typeof Campus>
}