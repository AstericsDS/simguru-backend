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
}
