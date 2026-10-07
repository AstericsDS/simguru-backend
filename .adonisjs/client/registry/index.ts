/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'auth.new_account.store': {
    methods: ["POST"],
    pattern: '/api/v1/auth/signup',
    tokens: [{"old":"/api/v1/auth/signup","type":0,"val":"api","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['auth.new_account.store']['types'],
  },
  'auth.access_tokens.store': {
    methods: ["POST"],
    pattern: '/api/v1/auth/login',
    tokens: [{"old":"/api/v1/auth/login","type":0,"val":"api","end":""},{"old":"/api/v1/auth/login","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/login","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['auth.access_tokens.store']['types'],
  },
  'profile.profile.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/account/profile',
    tokens: [{"old":"/api/v1/account/profile","type":0,"val":"api","end":""},{"old":"/api/v1/account/profile","type":0,"val":"v1","end":""},{"old":"/api/v1/account/profile","type":0,"val":"account","end":""},{"old":"/api/v1/account/profile","type":0,"val":"profile","end":""}],
    types: placeholder as Registry['profile.profile.show']['types'],
  },
  'profile.access_tokens.destroy': {
    methods: ["POST"],
    pattern: '/api/v1/account/logout',
    tokens: [{"old":"/api/v1/account/logout","type":0,"val":"api","end":""},{"old":"/api/v1/account/logout","type":0,"val":"v1","end":""},{"old":"/api/v1/account/logout","type":0,"val":"account","end":""},{"old":"/api/v1/account/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['profile.access_tokens.destroy']['types'],
  },
  'roles.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/roles',
    tokens: [{"old":"/api/v1/roles","type":0,"val":"api","end":""},{"old":"/api/v1/roles","type":0,"val":"v1","end":""},{"old":"/api/v1/roles","type":0,"val":"roles","end":""}],
    types: placeholder as Registry['roles.index']['types'],
  },
  'roles.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/roles/:id',
    tokens: [{"old":"/api/v1/roles/:id","type":0,"val":"api","end":""},{"old":"/api/v1/roles/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/roles/:id","type":0,"val":"roles","end":""},{"old":"/api/v1/roles/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['roles.show']['types'],
  },
  'roles.store': {
    methods: ["POST"],
    pattern: '/api/v1/roles',
    tokens: [{"old":"/api/v1/roles","type":0,"val":"api","end":""},{"old":"/api/v1/roles","type":0,"val":"v1","end":""},{"old":"/api/v1/roles","type":0,"val":"roles","end":""}],
    types: placeholder as Registry['roles.store']['types'],
  },
  'roles.update': {
    methods: ["PUT"],
    pattern: '/api/v1/roles/:id',
    tokens: [{"old":"/api/v1/roles/:id","type":0,"val":"api","end":""},{"old":"/api/v1/roles/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/roles/:id","type":0,"val":"roles","end":""},{"old":"/api/v1/roles/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['roles.update']['types'],
  },
  'roles.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/roles/:id',
    tokens: [{"old":"/api/v1/roles/:id","type":0,"val":"api","end":""},{"old":"/api/v1/roles/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/roles/:id","type":0,"val":"roles","end":""},{"old":"/api/v1/roles/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['roles.destroy']['types'],
  },
  'campuses.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/campuses',
    tokens: [{"old":"/api/v1/campuses","type":0,"val":"api","end":""},{"old":"/api/v1/campuses","type":0,"val":"v1","end":""},{"old":"/api/v1/campuses","type":0,"val":"campuses","end":""}],
    types: placeholder as Registry['campuses.index']['types'],
  },
  'campuses.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/campuses/:id',
    tokens: [{"old":"/api/v1/campuses/:id","type":0,"val":"api","end":""},{"old":"/api/v1/campuses/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/campuses/:id","type":0,"val":"campuses","end":""},{"old":"/api/v1/campuses/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['campuses.show']['types'],
  },
  'campuses.store': {
    methods: ["POST"],
    pattern: '/api/v1/campuses',
    tokens: [{"old":"/api/v1/campuses","type":0,"val":"api","end":""},{"old":"/api/v1/campuses","type":0,"val":"v1","end":""},{"old":"/api/v1/campuses","type":0,"val":"campuses","end":""}],
    types: placeholder as Registry['campuses.store']['types'],
  },
  'campuses.update': {
    methods: ["PUT"],
    pattern: '/api/v1/campuses/:id',
    tokens: [{"old":"/api/v1/campuses/:id","type":0,"val":"api","end":""},{"old":"/api/v1/campuses/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/campuses/:id","type":0,"val":"campuses","end":""},{"old":"/api/v1/campuses/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['campuses.update']['types'],
  },
  'campuses.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/campuses/:id',
    tokens: [{"old":"/api/v1/campuses/:id","type":0,"val":"api","end":""},{"old":"/api/v1/campuses/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/campuses/:id","type":0,"val":"campuses","end":""},{"old":"/api/v1/campuses/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['campuses.destroy']['types'],
  },
  'buildings.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/buildings',
    tokens: [{"old":"/api/v1/buildings","type":0,"val":"api","end":""},{"old":"/api/v1/buildings","type":0,"val":"v1","end":""},{"old":"/api/v1/buildings","type":0,"val":"buildings","end":""}],
    types: placeholder as Registry['buildings.index']['types'],
  },
  'buildings.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/buildings/:id',
    tokens: [{"old":"/api/v1/buildings/:id","type":0,"val":"api","end":""},{"old":"/api/v1/buildings/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/buildings/:id","type":0,"val":"buildings","end":""},{"old":"/api/v1/buildings/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['buildings.show']['types'],
  },
  'buildings.store': {
    methods: ["POST"],
    pattern: '/api/v1/buildings',
    tokens: [{"old":"/api/v1/buildings","type":0,"val":"api","end":""},{"old":"/api/v1/buildings","type":0,"val":"v1","end":""},{"old":"/api/v1/buildings","type":0,"val":"buildings","end":""}],
    types: placeholder as Registry['buildings.store']['types'],
  },
  'buildings.update': {
    methods: ["PUT"],
    pattern: '/api/v1/buildings/:id',
    tokens: [{"old":"/api/v1/buildings/:id","type":0,"val":"api","end":""},{"old":"/api/v1/buildings/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/buildings/:id","type":0,"val":"buildings","end":""},{"old":"/api/v1/buildings/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['buildings.update']['types'],
  },
  'buildings.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/buildings/:id',
    tokens: [{"old":"/api/v1/buildings/:id","type":0,"val":"api","end":""},{"old":"/api/v1/buildings/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/buildings/:id","type":0,"val":"buildings","end":""},{"old":"/api/v1/buildings/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['buildings.destroy']['types'],
  },
  'rooms.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/rooms',
    tokens: [{"old":"/api/v1/rooms","type":0,"val":"api","end":""},{"old":"/api/v1/rooms","type":0,"val":"v1","end":""},{"old":"/api/v1/rooms","type":0,"val":"rooms","end":""}],
    types: placeholder as Registry['rooms.index']['types'],
  },
  'rooms.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/rooms/:id',
    tokens: [{"old":"/api/v1/rooms/:id","type":0,"val":"api","end":""},{"old":"/api/v1/rooms/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/rooms/:id","type":0,"val":"rooms","end":""},{"old":"/api/v1/rooms/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['rooms.show']['types'],
  },
  'rooms.store': {
    methods: ["POST"],
    pattern: '/api/v1/rooms',
    tokens: [{"old":"/api/v1/rooms","type":0,"val":"api","end":""},{"old":"/api/v1/rooms","type":0,"val":"v1","end":""},{"old":"/api/v1/rooms","type":0,"val":"rooms","end":""}],
    types: placeholder as Registry['rooms.store']['types'],
  },
  'rooms.update': {
    methods: ["PUT"],
    pattern: '/api/v1/rooms/:id',
    tokens: [{"old":"/api/v1/rooms/:id","type":0,"val":"api","end":""},{"old":"/api/v1/rooms/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/rooms/:id","type":0,"val":"rooms","end":""},{"old":"/api/v1/rooms/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['rooms.update']['types'],
  },
  'rooms.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/rooms/:id',
    tokens: [{"old":"/api/v1/rooms/:id","type":0,"val":"api","end":""},{"old":"/api/v1/rooms/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/rooms/:id","type":0,"val":"rooms","end":""},{"old":"/api/v1/rooms/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['rooms.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
