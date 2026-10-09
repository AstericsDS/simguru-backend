import { SloCertificateSchema } from '#database/schema'
import { randomUUID } from 'node:crypto'
import User from './user.ts'
import type { BelongsTo, HasOne } from '@adonisjs/lucid/types/relations'
import Asset from './asset.ts'
import SloValidation from './slo_validation.ts'
import { hasOne, belongsTo, column, beforeCreate } from '@adonisjs/lucid/orm'

export default class SloCertificate extends SloCertificateSchema {
  @column({ isPrimary: true })
  declare id: string

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @belongsTo(() => Asset)
  declare asset: BelongsTo<typeof Asset>

  @hasOne(() => SloValidation)
  declare sloValidation: HasOne<typeof SloValidation>

  @beforeCreate()
  static assignUuid(model: SloCertificate) {
    model.id = model.id || randomUUID()
  }
}