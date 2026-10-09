import User from '#models/user'
import SloValidation from '#models/slo_validation'
import MaintenanceLog from '#models/maintenance_log'
import { createMaintenanceLogValidator } from '#validators/maintenance_log'
import type { HttpContext } from '@adonisjs/core/http'

export default class MaintenanceLogsController {
  async index({ response }: HttpContext) {
    const maintenanceLogs = await MaintenanceLog.all()

    return response.ok({
      status: 'success',
      data: maintenanceLogs,
    })
  }

  async show({ params, response }: HttpContext) {
    const maintenanceLogId = params.id

    const maintenanceLog = await MaintenanceLog.find(maintenanceLogId)

    if (!maintenanceLog) {
      return response.notFound({
        errors: [
          {
            status: 'RESOURCE_NOT_FOUND',
            message: 'The requested maintenance log could not be found.',
          },
        ],
      })
    }

    return response.ok(maintenanceLog)
  }

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createMaintenanceLogValidator)

    const technician_id = payload.technician_id
    const user = await User.find(technician_id)

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

    const slo_validation_id = payload.slo_validation_id
    const sloValidation = await SloValidation.find(slo_validation_id)

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

    const maintenanceLog = await MaintenanceLog.create(payload)

    return response.created(maintenanceLog)
  }
}
