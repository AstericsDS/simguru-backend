import SloCertificate from '#models/slo_certificate'
import SloValidation from '#models/slo_validation'
import { createSloValidationValidator } from '#validators/slo_validation'
import type { HttpContext } from '@adonisjs/core/http'

export default class SloValidationsController {
  async index({ response }: HttpContext) {
    const sloValidations = await SloValidation.all()

    return response.ok({
      status: 'success',
      data: sloValidations,
    })
  }

  async show({ params, response }: HttpContext) {
    const sloValidationId = params.id

    const sloValidation = await SloValidation.find(sloValidationId)

    if (!sloValidation) {
      return response.notFound({
        errors: [
          {
            status: 'RESOURCE_NOT_FOUND',
            message: 'The requested slo validation could not be found.',
          },
        ],
      })
    }

    return response.ok(sloValidation)
  }

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createSloValidationValidator)

    const certificate_id = payload.certificate_id
    if (certificate_id) {
      const relatedSloCertificate = await SloCertificate.find(certificate_id)
      if (!relatedSloCertificate) {
        return response.notFound({
          errors: [
            {
              status: 'RESOURCE_NOT_FOUND',
              message: 'The requested slo certificate could not be found.',
            },
          ],
        })
      }
    }

    const sloValidation = await SloValidation.create(payload)

    return response.created(sloValidation)
  }

  async update({ params, request, response }: HttpContext) {
    const sloValidationId = params.id

    const payload = await request.validateUsing(createSloValidationValidator)

    const sloValidation = await SloValidation.find(sloValidationId)

    if (!sloValidation) {
      return response.notFound({
        errors: [
          {
            status: 'RESOURCE_NOT_FOUND',
            message: 'The requested slo validation could not be found.',
          },
        ],
      })
    }

    const certificate_id = payload.certificate_id
    if (certificate_id) {
      const relatedSloCertificate = await SloCertificate.find(certificate_id)
      if (!relatedSloCertificate) {
        return response.notFound({
          errors: [
            {
              status: 'RESOURCE_NOT_FOUND',
              message: 'The requested slo certificate could not be found.',
            },
          ],
        })
      }
    }

    sloValidation?.merge(payload)
    await sloValidation?.save()

    return response.ok(sloValidation)
  }

  async destroy({ params, response }: HttpContext) {
    const sloValidationId = params.id

    const sloValidation = await SloValidation.find(sloValidationId)

    if (!sloValidation) {
      return response.notFound({
        errors: [
          {
            status: 'RESOURCE_NOT_FOUND',
            message: 'The requested slo validation could not be found.',
          },
        ],
      })
    }

    await sloValidation?.delete()

    return response.ok({
      status: 'Success',
      message: 'SloValidation has successfully deleted',
    })
  }
}
