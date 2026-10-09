import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'slo_validation_checks'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.uuid('slo_checklist_item_id')
      table.uuid('slo_validation_id')
      table.foreign('slo_checklist_item_id').references('slo_checklist_items.id')
      table.foreign('slo_validation_id').references('slo_validations.id')
      table.boolean('is_passed')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}