import vine from '@vinejs/vine'

export const createSloValidationImageValidator = vine.create({
  slo_validation_id: vine.string().uuid(),
  path: vine.string()
})
