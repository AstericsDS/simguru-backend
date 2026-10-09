import { CampusSchema } from '#database/schema'
import { beforeCreate, hasMany, column } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { randomUUID } from 'node:crypto'
import Building from './building.ts'

export default class Campus extends CampusSchema {
  @column({ isPrimary: true })
  declare id: string

  @hasMany(() => Building)
  declare users: HasMany<typeof Building>

  @beforeCreate()
  static assignUuid(model: Campus) {
    model.id = model.id || randomUUID()
  }
}
