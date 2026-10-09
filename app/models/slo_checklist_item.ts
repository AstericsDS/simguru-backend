import { SloChecklistItemSchema } from '#database/schema'
import { belongsTo, column, hasMany, beforeCreate } from '@adonisjs/lucid/orm'
import Asset from './asset.ts'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import SloValidationCheck from './slo_validation_check.ts'
import { randomUUID } from 'node:crypto'

export default class SloChecklistItem extends SloChecklistItemSchema {
  @column({ isPrimary: true })
  declare id: string

  @belongsTo(() => Asset)
  declare asset: BelongsTo<typeof Asset>

  @hasMany(() => SloValidationCheck)
  declare sloValidationChecks: HasMany<typeof SloValidationCheck>

  @beforeCreate()
  static assignUuid(model: SloChecklistItem) {
    model.id = model.id || randomUUID()
  }
}