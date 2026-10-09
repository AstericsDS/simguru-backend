import { SloValidationCheckSchema } from '#database/schema'
import { randomUUID } from 'node:crypto'
import SloChecklistItem from './slo_checklist_item.ts'
import SloValidation from './slo_validation.ts'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { column, belongsTo, beforeCreate } from '@adonisjs/lucid/orm'

export default class SloValidationCheck extends SloValidationCheckSchema {
  @column({ isPrimary: true })
  declare id: string

  @belongsTo(() => SloChecklistItem)
  declare sloChecklistItem: BelongsTo<typeof SloChecklistItem>

  @belongsTo(() => SloValidation)
  declare sloValidation: BelongsTo<typeof SloValidation>

  @beforeCreate()
  static assignUuid(model: SloValidationCheck) {
    model.id = model.id || randomUUID()
  }
}