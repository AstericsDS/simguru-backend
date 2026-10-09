import vine from '@vinejs/vine'

export const createSloCertificateValidator = vine.create({
  user_id: vine.string().uuid(),
  asset_id: vine.string().uuid(),
  slo_code: vine.string(),
  name: vine.string(),
  status: vine.enum(['pending', 'approved', 'rejected', 'expired'])
})
