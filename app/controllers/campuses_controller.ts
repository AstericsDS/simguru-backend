import Campus from '#models/campus'
import { createCampusValidator } from '#validators/campus'
import type { HttpContext } from '@adonisjs/core/http'

export default class CampusesController {
  async index({ response }: HttpContext) {
    const campuses = await Campus.all()

    return response.ok({
      status: 'success',
      data: campuses,
    })
  }

  async show({ params, response }: HttpContext) {
    const campusId = params.id

    const campus = await Campus.find(campusId)

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

    return response.ok(campus)
  }

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createCampusValidator)

    const campus = await Campus.create(payload)

    return response.created(campus)
  }

  async update({ params, request, response }: HttpContext) {
    const campusId = params.id

    const payload = await request.validateUsing(createCampusValidator)

    const campus = await Campus.find(campusId)

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

    campus?.merge(payload)
    await campus?.save()

    return response.ok(campus)
  }

  async destroy({ params, response }: HttpContext) {
    const campusId = params.id

    const campus = await Campus.find(campusId)

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

    await campus?.delete()

    return response.ok({
      status: 'Success',
      message: 'Campus has successfully deleted',
    })
  }
}
