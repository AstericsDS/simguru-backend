import { SloValidationSchema } from '#database/schema'
import type { BelongsTo, HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import SloCertificate from './slo_certificate.ts'
import { randomUUID } from 'node:crypto'
import SloValidationCheck from './slo_validation_check.ts'
import SloValidationImage from './slo_validation_image.ts'
import MaintenanceLog from './maintenance_log.ts'
import { column, hasOne, hasMany, belongsTo, beforeCreate } from '@adonisjs/lucid/orm'

export default class SloValidation extends SloValidationSchema {
  @column({ isPrimary: true })
  declare id: string

  @hasMany(() => SloValidationCheck)
  declare sloValidationCheck: HasMany<typeof SloValidationCheck>

  @hasMany(() => SloValidationImage)
  declare sloValidationImage: HasMany<typeof SloValidationImage>

  @hasOne(() => MaintenanceLog)
  declare maintenanceLog: HasOne<typeof MaintenanceLog>

  @belongsTo(() => SloCertificate)
  declare sloCertificate: BelongsTo<typeof SloCertificate>

  @beforeCreate()
  static assignUuid(model: SloValidation) {
    model.id = model.id || randomUUID()
  }
}