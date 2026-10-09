import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'
import Role from '#models/role'
import hash from '@adonisjs/core/services/hash'

export default class extends BaseSeeder {
  async run() {
    const roles = await Role.all()

    const usersData = []

    for (const role of roles) {
      // Seed two users for each role
      for (let i = 1; i <= 2; i++) {
        const suffix = i === 1 ? 'one' : 'two'
        
        usersData.push({
          name: `${role.name} User ${i}`,
          email: `${role.code}_${suffix}@example.com`,
          password: await hash.make('password123'),
          roleId: role.id,
        })
      }
    }

    // Insert all generated users
    for (const data of usersData) {
      // Using firstOrNew to avoid duplication on re-run
      const user = await User.firstOrNew({ email: data.email }, data)
      await user.save()
    }
  }
}
