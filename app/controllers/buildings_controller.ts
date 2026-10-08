import Building from '#models/building'
import Campus from '#models/campus'
import { createBuildingValidator } from '#validators/building'
import type { HttpContext } from '@adonisjs/core/http'

export default class BuildingsController {
  async index({ response }: HttpContext) {
    const buildings = await Building.all()

    return response.ok({
      status: 'success',
      data: buildings,
    })
  }

  async show({ params, response }: HttpContext) {
    const buildingId = params.id

    const building = await Building.find(buildingId)

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

    return response.ok(building)
  }

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createBuildingValidator)

    // Check for campus
    const campus_id = payload.campus_id
    const campus = await Campus.find(campus_id)

    if (!campus) {
      return response.notFound({
        errors: [
          {
            status: 'RESOURCE_NOT_FOUND',
            message: 'The requested campus could not be found.',
          },
        ],
      })
    }

    // Check for duplicate
    const normalizedName = payload.name.trim().toLowerCase()

    const existingBuilding = await Building.query()
      .where('campusId', payload.campus_id)
      .whereRaw('LOWER(TRIM(name)) = ?', [normalizedName])
      .first()

    if (existingBuilding) {
      return response.conflict({
        errors: [
          {
            status: 'DUPLICATE_RESOURCE',
            message: 'A building with this name already exists in this campus.',
          },
        ],
      })
    }

    const building = await Building.create(payload)

    return response.created(building)
  }

  async update({ params, request, response }: HttpContext) {
    const buildingId = params.id

    const payload = await request.validateUsing(createBuildingValidator)

    const building = await Building.find(buildingId)

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

    // Check for campus
    const campus_id = payload.campus_id
    const campus = await Campus.find(campus_id)

    if (!campus) {
      return response.notFound({
        errors: [
          {
            status: 'RESOURCE_NOT_FOUND',
            message: 'The requested campus could not be found.',
          },
        ],
      })
    }

    // Check for duplicate
    const normalizedName = payload.name.trim().toLowerCase()

    const existingBuilding = await Building.query()
      .where('campusId', payload.campus_id)
      .whereRaw('LOWER(TRIM(name)) = ?', [normalizedName])
      .first()

    if (existingBuilding) {
      return response.conflict({
        errors: [
          {
            status: 'DUPLICATE_RESOURCE',
            message: 'A building with this name already exists in this campus.',
          },
        ],
      })
    }

    building?.merge(payload)
    await building?.save()

    return response.ok(building)
  }

  async destroy({ params, response }: HttpContext) {
    const buildingId = params.id

    const building = await Building.find(buildingId)

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

    await building?.delete()

    return response.ok({
      status: 'Success',
      message: 'Building has successfully deleted',
    })
  }
}
