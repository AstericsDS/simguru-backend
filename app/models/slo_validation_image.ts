import { SloValidationImageSchema } from '#database/schema'
import { column, belongsTo, beforeCreate } from '@adonisjs/lucid/orm'
import SloValidation from './slo_validation.ts'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { randomUUID } from 'node:crypto'

export default class SloValidationImage extends SloValidationImageSchema {
  @column({ isPrimary: true })
  declare id: string

  @belongsTo(() => SloValidation)
  declare sloValidation: BelongsTo<typeof SloValidation>

  @beforeCreate()
  static assignUuid(model: SloValidationImage) {
    model.id = model.id || randomUUID()
  }
}