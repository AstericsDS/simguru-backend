import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'buildings'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.uuid('campus_id').notNullable()
      table.foreign('campus_id').references('campuses.id')
      table.string('name')
      table.integer('building_area')
      table.integer('land_area')
      table.integer('total_floors')
      table.text('description')
      table.unique(['campus_id', 'name'])

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}