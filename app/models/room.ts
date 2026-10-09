import { RoomSchema } from '#database/schema'
import { randomUUID } from 'node:crypto'
import { beforeCreate, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import Building from './building.ts'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Asset from './asset.ts'

export default class Room extends RoomSchema {
  @column({ isPrimary: true })
  declare id: string

  @hasMany(() => Asset)
  declare assets: HasMany<typeof Asset>

  @belongsTo(() => Building)
  declare building: BelongsTo<typeof Building>

  @beforeCreate()
  static assignUuid(model: Room) {
    model.id = model.id || randomUUID()
  }
}