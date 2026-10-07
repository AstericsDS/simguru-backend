import { RoomSchema } from '#database/schema'
import { randomUUID } from 'node:crypto'
import { beforeCreate, column, belongsTo } from '@adonisjs/lucid/orm'
import Building from '#models/building'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Room extends RoomSchema {
  @column({ isPrimary: true })
  declare id: string

  @belongsTo(() => Building)
  declare building: BelongsTo<typeof Building>

  @beforeCreate()
  static assignUuid(model: Room) {
    model.id = model.id || randomUUID()
  }
}