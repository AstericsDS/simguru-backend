import SloChecklistItem from '#models/slo_checklist_item'
import SloValidation from '#models/slo_validation'
import SloValidationCheck from '#models/slo_validation_check'
import { createSloValidationCheckValidator } from '#validators/slo_validation_check'
import type { HttpContext } from '@adonisjs/core/http'

export default class SloValidationChecksController {
  async index({ response }: HttpContext) {
    const sloValidationChecks = await SloValidationCheck.all()

    return response.ok({
      status: 'success',
      data: sloValidationChecks,
    })
  }

  async show({ params, response }: HttpContext) {
    const sloValidationCheckId = params.id

    const sloValidationCheck = await SloValidationCheck.find(sloValidationCheckId)

    if (!sloValidationCheck) {
      return response.notFound({
        errors: [
          {
            status: 'RESOURCE_NOT_FOUND',
            message: 'The requested slo validation check could not be found.',
          },
        ],
      })
    }

    return response.ok(sloValidationCheck)
  }

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createSloValidationCheckValidator)

    const slo_checklist_item_id = payload.slo_checklist_item_id
    if (slo_checklist_item_id) {
      const relatedSloChecklistItem = await SloChecklistItem.find(slo_checklist_item_id)
      if (!relatedSloChecklistItem) {
        return response.notFound({
          errors: [
            {
              status: 'RESOURCE_NOT_FOUND',
              message: 'The requested slo checklist item could not be found.',
            },
          ],
        })
      }
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

    const sloValidationCheck = await SloValidationCheck.create(payload)

    return response.created(sloValidationCheck)
  }

  async update({ params, request, response }: HttpContext) {
    const sloValidationCheckId = params.id

    const payload = await request.validateUsing(createSloValidationCheckValidator)

    const sloValidationCheck = await SloValidationCheck.find(sloValidationCheckId)

    if (!sloValidationCheck) {
      return response.notFound({
        errors: [
          {
            status: 'RESOURCE_NOT_FOUND',
            message: 'The requested slo validation check could not be found.',
          },
        ],
      })
    }

    const slo_checklist_item_id = payload.slo_checklist_item_id
    if (slo_checklist_item_id) {
      const relatedSloChecklistItem = await SloChecklistItem.find(slo_checklist_item_id)
      if (!relatedSloChecklistItem) {
        return response.notFound({
          errors: [
            {
              status: 'RESOURCE_NOT_FOUND',
              message: 'The requested slo checklist item could not be found.',
            },
          ],
        })
      }
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

    sloValidationCheck?.merge(payload)
    await sloValidationCheck?.save()

    return response.ok(sloValidationCheck)
  }

  async destroy({ params, response }: HttpContext) {
    const sloValidationCheckId = params.id

    const sloValidationCheck = await SloValidationCheck.find(sloValidationCheckId)

    if (!sloValidationCheck) {
      return response.notFound({
        errors: [
          {
            status: 'RESOURCE_NOT_FOUND',
            message: 'The requested slo validation check could not be found.',
          },
        ],
      })
    }

    await sloValidationCheck?.delete()

    return response.ok({
      status: 'Success',
      message: 'SloValidationCheck has successfully deleted',
    })
  }
}
