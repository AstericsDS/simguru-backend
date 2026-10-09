import Room from '#models/room'
import Asset from '#models/asset'
import { createAssetValidator } from '#validators/asset'
import type { HttpContext } from '@adonisjs/core/http'

export default class AssetsController {
  async index({ response }: HttpContext) {
    const assets = await Asset.all()

    return response.ok({
      status: 'success',
      data: assets,
    })
  }

  async show({ params, response }: HttpContext) {
    const assetId = params.id

    const asset = await Asset.find(assetId)

    if (!asset) {
      return response.notFound({
        errors: [
          {
            status: 'RESOURCE_NOT_FOUND',
            message: 'The requested asset could not be found.',
          },
        ],
      })
    }

    return response.ok(asset)
  }

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createAssetValidator)

    const room_id = payload.room_id
    const room = await Room.find(room_id)

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

    const asset = await Asset.create(payload)

    return response.created(asset)
  }

  async update({ params, request, response }: HttpContext) {
    const assetId = params.id

    const payload = await request.validateUsing(createAssetValidator)

    const asset = await Asset.find(assetId)

    if (!asset) {
      return response.notFound({
        errors: [
          {
            status: 'RESOURCE_NOT_FOUND',
            message: 'The requested asset could not be found.',
          },
        ],
      })
    }

    const room_id = payload.room_id
    const room = await Room.find(room_id)
    
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

    asset?.merge(payload)
    await asset?.save()

    return response.ok(asset)
  }

  async destroy({ params, response }: HttpContext) {
    const assetId = params.id

    const asset = await Asset.find(assetId)

    if (!asset) {
      return response.notFound({
        errors: [
          {
            status: 'RESOURCE_NOT_FOUND',
            message: 'The requested asset could not be found.',
          },
        ],
      })
    }

    await asset?.delete()

    return response.ok({
      status: 'Success',
      message: 'Asset has successfully deleted',
    })
  }
}
