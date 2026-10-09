import User from '#models/user'
import UserTransformer from '#transformers/user_transformer'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProfileController {
  async show({ auth, serialize }: HttpContext) {
    return serialize(UserTransformer.transform(auth.getUserOrFail()))
  }

  async index({ response }: HttpContext) {
    const users = await User.all()
    return response.ok({
      status: "success",
      data: users
    })
  }
}
