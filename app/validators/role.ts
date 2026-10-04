import vine from '@vinejs/vine'

export const createRoleValidator = vine.create({
  name: vine.string(),
  code: vine.string(),
  description: vine.string()
});