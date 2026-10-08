import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'rooms'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.uuid('building_id').notNullable()
      table.foreign('building_id').references('buildings.id')
      table.string('name');
      table.integer('floor')
      table.integer('length')
      table.integer('width')
      table.integer('height')
      table.integer('capacity')
      table.text('description')
      table.enum('category', ['classroom', 'laboratory', 'office', 'auditorium'])
      table.unique(['building_id', 'name'])

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}