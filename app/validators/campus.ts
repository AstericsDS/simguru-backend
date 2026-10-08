import vine from '@vinejs/vine'

export const createCampusValidator = vine.create({
  name: vine.string(),
  address: vine.string(),
  area_size: vine.number().min(1),
  contact: vine.string(),
  description: vine.string()
})