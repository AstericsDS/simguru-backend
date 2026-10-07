import vine from '@vinejs/vine'

export const createBuildingValidator = vine.create({
  campus_id: vine.string().uuid(),
  name: vine.string(),
  building_area: vine.number().nonNegative(),
  land_area: vine.number().nonNegative(),
  total_floors: vine.number().nonNegative(),
  description: vine.string()
})