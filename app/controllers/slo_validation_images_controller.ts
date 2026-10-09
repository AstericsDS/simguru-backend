import SloValidation from '#models/slo_validation'
import SloValidationImage from '#models/slo_validation_image'
import { createSloValidationImageValidator } from '#validators/slo_validation_image'
import type { HttpContext } from '@adonisjs/core/http'

export default class SloValidationImagesController {
  async index({ response }: HttpContext) {
    const sloValidationImages = await SloValidationImage.all()

    return response.ok({
      status: 'success',
      data: sloValidationImages,
    })
  }

  async show({ params, response }: HttpContext) {
    const sloValidationImageId = params.id

    const sloValidationImage = await SloValidationImage.find(sloValidationImageId)

    if (!sloValidationImage) {
      return response.notFound({
        errors: [
          {
            status: 'RESOURCE_NOT_FOUND',
            message: 'The requested slo validation image could not be found.',
          },
        ],
      })
    }

    return response.ok(sloValidationImage)
  }

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createSloValidationImageValidator)

    const slo_validation_id = payload.slo_validation_id
    if (slo_validation_id) {
      const relatedSloValidation = await SloValidation.find(slo_validation_id)
      if (!relatedSloValidation) {
        return response.notFound({
          errors: [
            {
              status: 'RESOURCE_NOT_FOUND',
              message: 'The requested slo validation could not be found.',
            },
          ],
        })
      }
    }

    const sloValidationImage = await SloValidationImage.create(payload)

    return response.created(sloValidationImage)
  }

  async update({ params, request, response }: HttpContext) {
    const sloValidationImageId = params.id

    const payload = await request.validateUsing(createSloValidationImageValidator)

    const sloValidationImage = await SloValidationImage.find(sloValidationImageId)

    if (!sloValidationImage) {
      return response.notFound({
        errors: [
          {
            status: 'RESOURCE_NOT_FOUND',
            message: 'The requested slo validation image could not be found.',
          },
        ],
      })
    }

    const slo_validation_id = payload.slo_validation_id
    if (slo_validation_id) {
      const relatedSloValidation = await SloValidation.find(slo_validation_id)
      if (!relatedSloValidation) {
        return response.notFound({
          errors: [
            {
              status: 'RESOURCE_NOT_FOUND',
              message: 'The requested slo validation could not be found.',
            },
          ],
        })
      }
    }

    sloValidationImage?.merge(payload)
    await sloValidationImage?.save()

    return response.ok(sloValidationImage)
  }

  async destroy({ params, response }: HttpContext) {
    const sloValidationImageId = params.id

    const sloValidationImage = await SloValidationImage.find(sloValidationImageId)

    if (!sloValidationImage) {
      return response.notFound({
        errors: [
          {
            status: 'RESOURCE_NOT_FOUND',
            message: 'The requested slo validation image could not be found.',
          },
        ],
      })
    }

    await sloValidationImage?.delete()

    return response.ok({
      status: 'Success',
      message: 'SloValidationImage has successfully deleted',
    })
  }
}
