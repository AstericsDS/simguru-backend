import vine from '@vinejs/vine'

export const createAssetValidator = vine.create({
  room_id: vine.string().uuid(),
  name: vine.string(),
  brand: vine.string(),
  asset_type: vine.enum(['electronic', 'furniture', 'vehicle', 'machinery']),
  purchase_price: vine.number(),
  barcode: vine.string()
})
