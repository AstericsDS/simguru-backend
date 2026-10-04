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
}
