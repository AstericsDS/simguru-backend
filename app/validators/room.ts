import vine from '@vinejs/vine'

  export const createRoomValidator = vine.create({
    building_id: vine.string().uuid(),
    name: vine.string(),
    floor: vine.number().min(1),
    length: vine.number().min(1),
    width: vine.number().min(1),
    height: vine.number().min(1),
    capacity: vine.number().min(1),
    description: vine.string(),
    category: vine.enum(['classroom', 'laboratory', 'office', 'auditorium'])
  });