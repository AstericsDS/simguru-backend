import vine from '@vinejs/vine'

export const createSloValidationCheckValidator = vine.create({
  slo_checklist_item_id: vine.string().uuid(),
  slo_validation_id: vine.string().uuid(),
  is_passed: vine.boolean()
})
