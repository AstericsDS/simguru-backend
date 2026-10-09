import { MaintenanceLogSchema } from '#database/schema'
import { randomUUID } from 'node:crypto'
import User from './user.ts'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import SloValidation from './slo_validation.ts'
import { belongsTo, column, beforeCreate } from '@adonisjs/lucid/orm'

export default class MaintenanceLog extends MaintenanceLogSchema {
  @column({ isPrimary: true })
  declare id: string

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @belongsTo(() => SloValidation)
  declare sloValidation: BelongsTo<typeof User>

  @beforeCreate()
  static assignUuid(model: MaintenanceLog) {
    model.id = model.id || randomUUID()
  }
}