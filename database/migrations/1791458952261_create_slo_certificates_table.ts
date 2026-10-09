import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'slo_certificates'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.uuid('user_id').notNullable()
      table.uuid('asset_id').notNullable()
      table.foreign('user_id').references('users.id')
      table.foreign('asset_id').references('assets.id')
      table.string('slo_code')
      table.string('name')
      table.enum('status', ['pending', 'approved', 'rejected', 'expired'])

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}