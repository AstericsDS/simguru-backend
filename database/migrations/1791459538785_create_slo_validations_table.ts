import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'slo_validations'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.uuid('slo_certificate_id').notNullable()
      table.foreign('slo_certificate_id').references('slo_certificates.id')
      table.integer('estimated_repair_cost')
      table.boolean('requires_power_outage')
      table.enum('condition', ['good', 'minor_damage', 'major_damage'])

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}