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
      
    router.get('/', [controllers.Profile, 'index']).prefix('users')

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

      // Assets
      router
        .group(() => {
          router.get('/', [controllers.Assets, 'index']),
          router.get('/:id', [controllers.Assets, 'show']),
          router.post('/', [controllers.Assets, 'store']),
          router.put('/:id', [controllers.Assets, 'update']),
          router.delete('/:id', [controllers.Assets, 'destroy'])
        })
        .prefix('assets')

      // Maintenance Logs
      router
        .group(() => {
          router.get('/', [controllers.MaintenanceLogs, 'index']),
          router.get('/:id', [controllers.MaintenanceLogs, 'show']),
          router.post('/', [controllers.MaintenanceLogs, 'store'])
        })
        .prefix('maintenance-logs')

      // SLO Certificates
      router
        .group(() => {
          router.get('/', [controllers.SloCertificates, 'index']),
          router.get('/:id', [controllers.SloCertificates, 'show']),
          router.post('/', [controllers.SloCertificates, 'store']),
          router.put('/:id', [controllers.SloCertificates, 'update']),
          router.delete('/:id', [controllers.SloCertificates, 'destroy'])
        })
        .prefix('slo-certificates')

      // SLO Checklist Items
      router
        .group(() => {
          router.get('/', [controllers.SloChecklistItems, 'index']),
          router.get('/:id', [controllers.SloChecklistItems, 'show']),
          router.post('/', [controllers.SloChecklistItems, 'store']),
          router.put('/:id', [controllers.SloChecklistItems, 'update']),
          router.delete('/:id', [controllers.SloChecklistItems, 'destroy'])
        })
        .prefix('slo-checklist-items')

      // SLO Validations
      router
        .group(() => {
          router.get('/', [controllers.SloValidations, 'index']),
          router.get('/:id', [controllers.SloValidations, 'show']),
          router.post('/', [controllers.SloValidations, 'store']),
          router.put('/:id', [controllers.SloValidations, 'update']),
          router.delete('/:id', [controllers.SloValidations, 'destroy'])
        })
        .prefix('slo-validations')

      // SLO Validation Checks
      router
        .group(() => {
          router.get('/', [controllers.SloValidationChecks, 'index']),
          router.get('/:id', [controllers.SloValidationChecks, 'show']),
          router.post('/', [controllers.SloValidationChecks, 'store']),
          router.put('/:id', [controllers.SloValidationChecks, 'update']),
          router.delete('/:id', [controllers.SloValidationChecks, 'destroy'])
        })
        .prefix('slo-validation-checks')

      // SLO Validation Images
      router
        .group(() => {
          router.get('/', [controllers.SloValidationImages, 'index']),
          router.get('/:id', [controllers.SloValidationImages, 'show']),
          router.post('/', [controllers.SloValidationImages, 'store']),
          router.put('/:id', [controllers.SloValidationImages, 'update']),
          router.delete('/:id', [controllers.SloValidationImages, 'destroy'])
        })
        .prefix('slo-validation-images')
  })
  .prefix('/api/v1')
