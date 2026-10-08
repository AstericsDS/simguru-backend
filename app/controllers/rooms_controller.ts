import Building from '#models/building'
import Room from '#models/room'
import { createRoomValidator } from '#validators/room'
import type { HttpContext } from '@adonisjs/core/http'

export default class RoomsController {
  async index({ response }: HttpContext) {
    const room = await Room.all()

    return response.ok({
      status: 'success',
      data: room,
    })
  }

  async show({ params, response }: HttpContext) {
    const roomId = params.id

    const room = await Room.find(roomId)

    if (!room) {
      return response.notFound({
        errors: [
          {
            status: 'RESOURCE_NOT_FOUND',
            message: 'The requested room could not be found.',
          },
        ],
      })
    }

    return response.ok(room)
  }

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createRoomValidator)

    // Check for duplicate
    const building_id = payload.building_id
    const building = await Building.find(building_id)
    const normalizedName = payload.name.trim().toLowerCase()

    const existingRoom = await Room.query()
      .where('building_id', building_id)
      .whereRaw('LOWER(TRIM(name)) = ?', [normalizedName])
      .first()

    if (existingRoom) {
      return response.conflict({
        errors: [
          {
            status: 'DUPLICATE_RESOURCE',
            message: 'A room with this name already exists in this building.',
          },
        ],
      })
    }

    // Check building total floors
    if (!building) {
      return response.notFound({
        errors: [
          {
            status: 'RESOURCE_NOT_FOUND',
            message: 'The requested building could not be found.',
          },
        ],
      })
    }

    if (payload.floor > building.totalFloors!) {
      return response.badRequest({
        errors: [
          {
            status: 'BAD_REQUEST',
            message: `Floor cannot exceed the building's total floors (${building.totalFloors}).`,
          },
        ],
      })
    }

    const room = await Room.create(payload)

    return response.created(room)
  }

  async update({ params, request, response }: HttpContext) {
    const roomId = params.id

    const payload = await request.validateUsing(createRoomValidator)

    const room = await Room.find(roomId)

    if (!room) {
      return response.notFound({
        errors: [
          {
            status: 'RESOURCE_NOT_FOUND',
            message: 'The requested room could not be found.',
          },
        ],
      })
    }

    // Check for duplicate
    const building_id = payload.building_id
    const building = await Building.find(building_id)
    const normalizedName = payload.name.trim().toLowerCase()

    const existingRoom = await Room.query()
      .where('building_id', building_id)
      .whereRaw('LOWER(TRIM(name)) = ?', [normalizedName])
      .first()

    if (existingRoom) {
      return response.conflict({
        errors: [
          {
            status: 'DUPLICATE_RESOURCE',
            message: 'A room with this name already exists in this building.',
          },
        ],
      })
    }

    // Check building total floors
    if (!building) {
      return response.notFound({
        errors: [
          {
            status: 'RESOURCE_NOT_FOUND',
            message: 'The requested building could not be found.',
          },
        ],
      })
    }

    if (payload.floor > building.totalFloors!) {
      return response.badRequest({
        errors: [
          {
            status: 'BAD_REQUEST',
            message: `Floor cannot exceed the building's total floors (${building.totalFloors}).`,
          },
        ],
      })
    }

    room?.merge(payload)
    await room?.save()

    return response.ok(room)
  }

  async destroy({ params, response }: HttpContext) {
    const roomId = params.id

    const room = await Room.find(roomId)

    if (!room) {
      return response.notFound({
        errors: [
          {
            status: 'RESOURCE_NOT_FOUND',
            message: 'The requested room could not be found.',
          },
        ],
      })
    }

    await room?.delete()

    return response.ok({
      status: 'Success',
      message: 'Room has successfully deleted',
    })
  }
}
