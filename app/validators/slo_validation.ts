import vine from '@vinejs/vine'

export const createSloValidationValidator = vine.create({
  slo_certificate_id: vine.string().uuid(),
  estimated_repair_cost: vine.number(),
  requires_power_outage: vine.boolean(),
  condition: vine.enum(['good', 'minor_damage', 'major_damage'])
})
