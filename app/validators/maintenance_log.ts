import vine from '@vinejs/vine'

export const createMaintenanceLogValidator = vine.create({
  technician_id: vine.string().uuid(),
  slo_validation_id: vine.string().uuid(),
  inspection_code: vine.string(),
  action_taken: vine.string(),
  repair_cost: vine.number()
})
