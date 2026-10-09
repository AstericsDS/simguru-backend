import vine from '@vinejs/vine'

export const createSloChecklistItemValidator = vine.create({
  asset_id: vine.string().uuid(),
  indicator: vine.string()
})
