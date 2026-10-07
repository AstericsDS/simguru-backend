/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'

router.get('/', () => {
  return { hello: 'world' }
})

router
  .group(() => {
    // Auth
    router
    .group(() => {
        router.post('signup', [controllers.NewAccount, 'store'])
        router.post('login', [controllers.AccessTokens, 'store'])
      })
      .prefix('auth')
      .as('auth')
    
    // Profile
    router
      .group(() => {
        router.get('profile', [controllers.Profile, 'show'])
        router.post('logout', [controllers.AccessTokens, 'destroy'])
      })
      .prefix('account')
      .as('profile')
      .use(middleware.auth())

    // Roles
		router
			.group(() => {
				router.get('/', [controllers.Roles, 'index']),
				router.get('/:id', [controllers.Roles, 'show']),
				router.post('/', [controllers.Roles, 'store']),
				router.put('/:id', [controllers.Roles, 'update']),
				router.delete('/:id', [controllers.Roles, 'destroy'])
			})
			.prefix('roles')
    
      // Campuses
      router
        .group(() => {
          router.get('/', [controllers.Campuses, 'index']),
          router.get('/:id', [controllers.Campuses, 'show']),
          router.post('/', [controllers.Campuses, 'store']),
          router.put('/:id', [controllers.Campuses, 'update']),
          router.delete('/:id', [controllers.Campuses, 'destroy'])
        })
        .prefix('campuses')

      // Buildings
      router
        .group(() => {
          router.get('/', [controllers.Buildings, 'index']),
          router.get('/:id', [controllers.Buildings, 'show']),
          router.post('/', [controllers.Buildings, 'store']),
          router.put('/:id', [controllers.Buildings, 'update']),
          router.delete('/:id', [controllers.Buildings, 'destroy'])
        })
        .prefix('buildings')

      // Rooms
      router
        .group(() => {
          router.get('/', [controllers.Rooms, 'index']),
          router.get('/:id', [controllers.Rooms, 'show']),
          router.post('/', [controllers.Rooms, 'store']),
          router.put('/:id', [controllers.Rooms, 'update']),
          router.delete('/:id', [controllers.Rooms, 'destroy'])
        })
        .prefix('rooms')
  })
  .prefix('/api/v1')
