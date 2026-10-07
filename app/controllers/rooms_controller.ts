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
