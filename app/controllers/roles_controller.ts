import type { HttpContext } from '@adonisjs/core/http'
import Role from '#models/role'
import { createRoleValidator } from '#validators/role'

export default class RolesController {
  async index({ response }: HttpContext) {
    const roles = await Role.all()

    return response.ok({
      status: 'success',
      data: roles,
    })
  }

  async show({ params, response }: HttpContext) {
    const roleId = params.id

    const role = await Role.find(roleId)

    if (!role) {
      return response.notFound({
        errors: [
          {
            status: 'RESOURCE_NOT_FOUND',
            message: 'The requested role could not be found.',
          },
        ],
      })
    }

    return response.ok(role);
  }

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createRoleValidator);

    const role = await Role.create(payload);

    return response.created(role);
  }

  async update({ params, request, response }: HttpContext) {
    const roleId = params.id;

    const payload = await request.validateUsing(createRoleValidator);

    const role = await Role.find(roleId);

    if(!role) {
      return response.notFound({
        errors: [
          {
            status: 'RESOURCE_NOT_FOUND',
            message: 'The requested role could not be found.',
          },
        ],
      })
    }

    role?.merge(payload);
    await role?.save();

    return response.ok(role);
  }

  async destroy({ params, response }: HttpContext) {
    const roleId = params.id;

    const role = await Role.find(roleId);

    if(!role) {
      return response.notFound({
        errors: [
          {
            status: 'RESOURCE_NOT_FOUND',
            message: 'The requested role could not be found.',
          },
        ],
      })
    }

    await role?.delete();

    return response.ok({
      status: "Success",
      message: "Role has successfully deleted",
    });
  }
}
