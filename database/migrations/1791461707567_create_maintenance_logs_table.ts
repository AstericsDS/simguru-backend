import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'maintenance_logs'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.uuid('technician_id')
      table.uuid('slo_validation_id')
      table.foreign('technician_id').references('users.id')
      table.foreign('slo_validation_id').references('slo_validations.id')
      table.string('inspection_code')
      table.string('action_taken')
      table.integer('repair_cost')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}