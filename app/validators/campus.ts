import vine from '@vinejs/vine'

export const createCampusValidator = vine.create({
  name: vine.string(),
  address: vine.string(),
  area_size: vine.number(),
  contact: vine.string(),
  description: vine.string()
})