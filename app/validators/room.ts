import vine from '@vinejs/vine'

  export const createRoomValidator = vine.create({
    building_id: vine.string().uuid(),
    floor: vine.number().nonNegative(),
    length: vine.number().nonNegative(),
    width: vine.number().nonNegative(),
    height: vine.number().nonNegative(),
    capacity: vine.number().nonNegative(),
    description: vine.string(),
    category: vine.enum(['classroom', 'laboratory', 'office', 'auditorium'])
  });