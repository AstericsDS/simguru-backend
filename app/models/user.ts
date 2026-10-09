import { UserSchema } from '#database/schema'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { type AccessToken, DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import { randomUUID } from 'node:crypto'
import { beforeCreate, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import Role from '#models/role'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import SloCertificate from './slo_certificate.ts'
import MaintenanceLog from './maintenance_log.ts'

export default class User extends compose(UserSchema, withAuthFinder(hash)) {
  static accessTokens = DbAccessTokensProvider.forModel(User)
  declare currentAccessToken?: AccessToken

  get initials() {
    const [first, last] = this.name ? this.name.split(' ') : this.email.split('@')
    if (first && last) {
      return `${first.charAt(0)}${last.charAt(0)}`.toUpperCase()
    }
    return `${first.slice(0, 2)}`.toUpperCase()
  }

  @belongsTo(() => Role)
  declare role: BelongsTo<typeof Role>

  @hasMany(() => SloCertificate)
  declare sloCertificates: BelongsTo<typeof SloCertificate>

  @hasMany(() => MaintenanceLog)
  declare maintenanceLogs: HasMany<typeof MaintenanceLog>

  @beforeCreate()
  static assignUuid(model: User) {
    model.id = model.id || randomUUID()
  }
}
