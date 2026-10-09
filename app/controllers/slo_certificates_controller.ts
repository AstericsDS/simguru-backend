import User from '#models/user'
import Asset from '#models/asset'
import SloCertificate from '#models/slo_certificate'
import { createSloCertificateValidator } from '#validators/slo_certificate'
import type { HttpContext } from '@adonisjs/core/http'

export default class SloCertificatesController {
  async index({ response }: HttpContext) {
    const sloCertificates = await SloCertificate.all()

    return response.ok({
      status: 'success',
      data: sloCertificates,
    })
  }

  async show({ params, response }: HttpContext) {
    const sloCertificateId = params.id

    const sloCertificate = await SloCertificate.find(sloCertificateId)

    if (!sloCertificate) {
      return response.notFound({
        errors: [
          {
            status: 'RESOURCE_NOT_FOUND',
            message: 'The requested slo certificate could not be found.',
          },
        ],
      })
    }

    return response.ok(sloCertificate)
  }

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createSloCertificateValidator)

    const user_id = payload.user_id
    const user = await User.find(user_id)
    
    if (!user) {
      return response.notFound({
        errors: [
          {
            status: 'RESOURCE_NOT_FOUND',
            message: 'The requested user could not be found.',
          },
        ],
      })
    }

    const asset_id = payload.asset_id
    const asset = await Asset.find(asset_id)
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

    const sloCertificate = await SloCertificate.create(payload)

    return response.created(sloCertificate)
  }

  async update({ params, request, response }: HttpContext) {
    const sloCertificateId = params.id

    const payload = await request.validateUsing(createSloCertificateValidator)

    const sloCertificate = await SloCertificate.find(sloCertificateId)

    if (!sloCertificate) {
      return response.notFound({
        errors: [
          {
            status: 'RESOURCE_NOT_FOUND',
            message: 'The requested slo certificate could not be found.',
          },
        ],
      })
    }

    const user_id = payload.user_id
    if (user_id) {
      const user = await User.find(user_id)
      if (!user) {
        return response.notFound({
          errors: [
            {
              status: 'RESOURCE_NOT_FOUND',
              message: 'The requested user could not be found.',
            },
          ],
        })
      }
    }

    const asset_id = payload.asset_id
    if (asset_id) {
      const asset = await Asset.find(asset_id)
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
    }

    sloCertificate?.merge(payload)
    await sloCertificate?.save()

    return response.ok(sloCertificate)
  }

  async destroy({ params, response }: HttpContext) {
    const sloCertificateId = params.id

    const sloCertificate = await SloCertificate.find(sloCertificateId)

    if (!sloCertificate) {
      return response.notFound({
        errors: [
          {
            status: 'RESOURCE_NOT_FOUND',
            message: 'The requested slo certificate could not be found.',
          },
        ],
      })
    }

    await sloCertificate?.delete()

    return response.ok({
      status: 'Success',
      message: 'SloCertificate has successfully deleted',
    })
  }
}
