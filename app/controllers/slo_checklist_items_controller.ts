import Asset from '#models/asset'
import SloChecklistItem from '#models/slo_checklist_item'
import { createSloChecklistItemValidator } from '#validators/slo_checklist_item'
import type { HttpContext } from '@adonisjs/core/http'

export default class SloChecklistItemsController {
  async index({ response }: HttpContext) {
    const sloChecklistItems = await SloChecklistItem.all()

    return response.ok({
      status: 'success',
      data: sloChecklistItems,
    })
  }

  async show({ params, response }: HttpContext) {
    const sloChecklistItemId = params.id

    const sloChecklistItem = await SloChecklistItem.find(sloChecklistItemId)

    if (!sloChecklistItem) {
      return response.notFound({
        errors: [
          {
            status: 'RESOURCE_NOT_FOUND',
            message: 'The requested slo checklist item could not be found.',
          },
        ],
      })
    }

    return response.ok(sloChecklistItem)
  }

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createSloChecklistItemValidator)

    const asset_id = payload.asset_id
    if (asset_id) {
      const relatedAsset = await Asset.find(asset_id)
      if (!relatedAsset) {
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

    const sloChecklistItem = await SloChecklistItem.create(payload)

    return response.created(sloChecklistItem)
  }

  async update({ params, request, response }: HttpContext) {
    const sloChecklistItemId = params.id

    const payload = await request.validateUsing(createSloChecklistItemValidator)

    const sloChecklistItem = await SloChecklistItem.find(sloChecklistItemId)

    if (!sloChecklistItem) {
      return response.notFound({
        errors: [
          {
            status: 'RESOURCE_NOT_FOUND',
            message: 'The requested slo checklist item could not be found.',
          },
        ],
      })
    }

    const asset_id = payload.asset_id
    if (asset_id) {
      const relatedAsset = await Asset.find(asset_id)
      if (!relatedAsset) {
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

    sloChecklistItem?.merge(payload)
    await sloChecklistItem?.save()

    return response.ok(sloChecklistItem)
  }

  async destroy({ params, response }: HttpContext) {
    const sloChecklistItemId = params.id

    const sloChecklistItem = await SloChecklistItem.find(sloChecklistItemId)

    if (!sloChecklistItem) {
      return response.notFound({
        errors: [
          {
            status: 'RESOURCE_NOT_FOUND',
            message: 'The requested slo checklist item could not be found.',
          },
        ],
      })
    }

    await sloChecklistItem?.delete()

    return response.ok({
      status: 'Success',
      message: 'SloChecklistItem has successfully deleted',
    })
  }
}
