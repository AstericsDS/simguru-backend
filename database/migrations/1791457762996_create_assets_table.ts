import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'assets'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.uuid('room_id').notNullable()
      table.foreign('room_id').references('rooms.id')
      table.string('name');
      table.string('brand');
      table.enum('asset_type', ['electronic', 'furniture', 'vehicle', 'machinery']);
      table.integer('purchase_price');
      table.string('barcode');


      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}