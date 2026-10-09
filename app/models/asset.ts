import { AssetSchema } from '#database/schema'
import { beforeCreate, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import { randomUUID } from 'node:crypto'
import SloChecklistItem from './slo_checklist_item.ts'
import SloCertificate from './slo_certificate.ts'
import Room from './room.ts'

export default class Asset extends AssetSchema {
  @column({ isPrimary: true })
  declare id: string

  @hasMany(() => SloChecklistItem)
  declare sloChecklistItems: HasMany<typeof SloChecklistItem>

  @hasMany(() => SloCertificate)
  declare sloCertificates: HasMany<typeof SloCertificate>

  @belongsTo(() => Room)
  declare room: BelongsTo<typeof Room>

  @beforeCreate()
  static assignUuid(model: Asset) {
    model.id = model.id || randomUUID()
  }
}