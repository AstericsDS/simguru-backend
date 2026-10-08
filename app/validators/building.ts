import vine from '@vinejs/vine'

export const createBuildingValidator = vine.create({
  campus_id: vine.string().uuid(),
  name: vine.string(),
  building_area: vine.number().min(1),
  land_area: vine.number().min(1),
  total_floors: vine.number().min(1),
  description: vine.string()
})