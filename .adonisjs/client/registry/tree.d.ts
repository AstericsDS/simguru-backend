/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  auth: {
    newAccount: {
      store: typeof routes['auth.new_account.store']
    }
    accessTokens: {
      store: typeof routes['auth.access_tokens.store']
    }
  }
  profile: {
    profile: {
      show: typeof routes['profile.profile.show']
    }
    accessTokens: {
      destroy: typeof routes['profile.access_tokens.destroy']
    }
    index: typeof routes['profile.index']
  }
  roles: {
    index: typeof routes['roles.index']
    show: typeof routes['roles.show']
    store: typeof routes['roles.store']
    update: typeof routes['roles.update']
    destroy: typeof routes['roles.destroy']
  }
  campuses: {
    index: typeof routes['campuses.index']
    show: typeof routes['campuses.show']
    store: typeof routes['campuses.store']
    update: typeof routes['campuses.update']
    destroy: typeof routes['campuses.destroy']
  }
  buildings: {
    index: typeof routes['buildings.index']
    show: typeof routes['buildings.show']
    store: typeof routes['buildings.store']
    update: typeof routes['buildings.update']
    destroy: typeof routes['buildings.destroy']
  }
  rooms: {
    index: typeof routes['rooms.index']
    show: typeof routes['rooms.show']
    store: typeof routes['rooms.store']
    update: typeof routes['rooms.update']
    destroy: typeof routes['rooms.destroy']
  }
  assets: {
    index: typeof routes['assets.index']
    show: typeof routes['assets.show']
    store: typeof routes['assets.store']
    update: typeof routes['assets.update']
    destroy: typeof routes['assets.destroy']
  }
  maintenanceLogs: {
    index: typeof routes['maintenance_logs.index']
    show: typeof routes['maintenance_logs.show']
    store: typeof routes['maintenance_logs.store']
  }
  sloCertificates: {
    index: typeof routes['slo_certificates.index']
    show: typeof routes['slo_certificates.show']
    store: typeof routes['slo_certificates.store']
    update: typeof routes['slo_certificates.update']
    destroy: typeof routes['slo_certificates.destroy']
  }
  sloChecklistItems: {
    index: typeof routes['slo_checklist_items.index']
    show: typeof routes['slo_checklist_items.show']
    store: typeof routes['slo_checklist_items.store']
    update: typeof routes['slo_checklist_items.update']
    destroy: typeof routes['slo_checklist_items.destroy']
  }
  sloValidations: {
    index: typeof routes['slo_validations.index']
    show: typeof routes['slo_validations.show']
    store: typeof routes['slo_validations.store']
    update: typeof routes['slo_validations.update']
    destroy: typeof routes['slo_validations.destroy']
  }
  sloValidationChecks: {
    index: typeof routes['slo_validation_checks.index']
    show: typeof routes['slo_validation_checks.show']
    store: typeof routes['slo_validation_checks.store']
    update: typeof routes['slo_validation_checks.update']
    destroy: typeof routes['slo_validation_checks.destroy']
  }
  sloValidationImages: {
    index: typeof routes['slo_validation_images.index']
    show: typeof routes['slo_validation_images.show']
    store: typeof routes['slo_validation_images.store']
    update: typeof routes['slo_validation_images.update']
    destroy: typeof routes['slo_validation_images.destroy']
  }
}
