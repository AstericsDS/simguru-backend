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
  'profile.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/users',
    tokens: [{"old":"/api/v1/users","type":0,"val":"api","end":""},{"old":"/api/v1/users","type":0,"val":"v1","end":""},{"old":"/api/v1/users","type":0,"val":"users","end":""}],
    types: placeholder as Registry['profile.index']['types'],
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
  'assets.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/assets',
    tokens: [{"old":"/api/v1/assets","type":0,"val":"api","end":""},{"old":"/api/v1/assets","type":0,"val":"v1","end":""},{"old":"/api/v1/assets","type":0,"val":"assets","end":""}],
    types: placeholder as Registry['assets.index']['types'],
  },
  'assets.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/assets/:id',
    tokens: [{"old":"/api/v1/assets/:id","type":0,"val":"api","end":""},{"old":"/api/v1/assets/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/assets/:id","type":0,"val":"assets","end":""},{"old":"/api/v1/assets/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['assets.show']['types'],
  },
  'assets.store': {
    methods: ["POST"],
    pattern: '/api/v1/assets',
    tokens: [{"old":"/api/v1/assets","type":0,"val":"api","end":""},{"old":"/api/v1/assets","type":0,"val":"v1","end":""},{"old":"/api/v1/assets","type":0,"val":"assets","end":""}],
    types: placeholder as Registry['assets.store']['types'],
  },
  'assets.update': {
    methods: ["PUT"],
    pattern: '/api/v1/assets/:id',
    tokens: [{"old":"/api/v1/assets/:id","type":0,"val":"api","end":""},{"old":"/api/v1/assets/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/assets/:id","type":0,"val":"assets","end":""},{"old":"/api/v1/assets/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['assets.update']['types'],
  },
  'assets.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/assets/:id',
    tokens: [{"old":"/api/v1/assets/:id","type":0,"val":"api","end":""},{"old":"/api/v1/assets/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/assets/:id","type":0,"val":"assets","end":""},{"old":"/api/v1/assets/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['assets.destroy']['types'],
  },
  'maintenance_logs.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/maintenance-logs',
    tokens: [{"old":"/api/v1/maintenance-logs","type":0,"val":"api","end":""},{"old":"/api/v1/maintenance-logs","type":0,"val":"v1","end":""},{"old":"/api/v1/maintenance-logs","type":0,"val":"maintenance-logs","end":""}],
    types: placeholder as Registry['maintenance_logs.index']['types'],
  },
  'maintenance_logs.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/maintenance-logs/:id',
    tokens: [{"old":"/api/v1/maintenance-logs/:id","type":0,"val":"api","end":""},{"old":"/api/v1/maintenance-logs/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/maintenance-logs/:id","type":0,"val":"maintenance-logs","end":""},{"old":"/api/v1/maintenance-logs/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['maintenance_logs.show']['types'],
  },
  'maintenance_logs.store': {
    methods: ["POST"],
    pattern: '/api/v1/maintenance-logs',
    tokens: [{"old":"/api/v1/maintenance-logs","type":0,"val":"api","end":""},{"old":"/api/v1/maintenance-logs","type":0,"val":"v1","end":""},{"old":"/api/v1/maintenance-logs","type":0,"val":"maintenance-logs","end":""}],
    types: placeholder as Registry['maintenance_logs.store']['types'],
  },
  'slo_certificates.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/slo-certificates',
    tokens: [{"old":"/api/v1/slo-certificates","type":0,"val":"api","end":""},{"old":"/api/v1/slo-certificates","type":0,"val":"v1","end":""},{"old":"/api/v1/slo-certificates","type":0,"val":"slo-certificates","end":""}],
    types: placeholder as Registry['slo_certificates.index']['types'],
  },
  'slo_certificates.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/slo-certificates/:id',
    tokens: [{"old":"/api/v1/slo-certificates/:id","type":0,"val":"api","end":""},{"old":"/api/v1/slo-certificates/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/slo-certificates/:id","type":0,"val":"slo-certificates","end":""},{"old":"/api/v1/slo-certificates/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['slo_certificates.show']['types'],
  },
  'slo_certificates.store': {
    methods: ["POST"],
    pattern: '/api/v1/slo-certificates',
    tokens: [{"old":"/api/v1/slo-certificates","type":0,"val":"api","end":""},{"old":"/api/v1/slo-certificates","type":0,"val":"v1","end":""},{"old":"/api/v1/slo-certificates","type":0,"val":"slo-certificates","end":""}],
    types: placeholder as Registry['slo_certificates.store']['types'],
  },
  'slo_certificates.update': {
    methods: ["PUT"],
    pattern: '/api/v1/slo-certificates/:id',
    tokens: [{"old":"/api/v1/slo-certificates/:id","type":0,"val":"api","end":""},{"old":"/api/v1/slo-certificates/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/slo-certificates/:id","type":0,"val":"slo-certificates","end":""},{"old":"/api/v1/slo-certificates/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['slo_certificates.update']['types'],
  },
  'slo_certificates.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/slo-certificates/:id',
    tokens: [{"old":"/api/v1/slo-certificates/:id","type":0,"val":"api","end":""},{"old":"/api/v1/slo-certificates/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/slo-certificates/:id","type":0,"val":"slo-certificates","end":""},{"old":"/api/v1/slo-certificates/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['slo_certificates.destroy']['types'],
  },
  'slo_checklist_items.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/slo-checklist-items',
    tokens: [{"old":"/api/v1/slo-checklist-items","type":0,"val":"api","end":""},{"old":"/api/v1/slo-checklist-items","type":0,"val":"v1","end":""},{"old":"/api/v1/slo-checklist-items","type":0,"val":"slo-checklist-items","end":""}],
    types: placeholder as Registry['slo_checklist_items.index']['types'],
  },
  'slo_checklist_items.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/slo-checklist-items/:id',
    tokens: [{"old":"/api/v1/slo-checklist-items/:id","type":0,"val":"api","end":""},{"old":"/api/v1/slo-checklist-items/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/slo-checklist-items/:id","type":0,"val":"slo-checklist-items","end":""},{"old":"/api/v1/slo-checklist-items/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['slo_checklist_items.show']['types'],
  },
  'slo_checklist_items.store': {
    methods: ["POST"],
    pattern: '/api/v1/slo-checklist-items',
    tokens: [{"old":"/api/v1/slo-checklist-items","type":0,"val":"api","end":""},{"old":"/api/v1/slo-checklist-items","type":0,"val":"v1","end":""},{"old":"/api/v1/slo-checklist-items","type":0,"val":"slo-checklist-items","end":""}],
    types: placeholder as Registry['slo_checklist_items.store']['types'],
  },
  'slo_checklist_items.update': {
    methods: ["PUT"],
    pattern: '/api/v1/slo-checklist-items/:id',
    tokens: [{"old":"/api/v1/slo-checklist-items/:id","type":0,"val":"api","end":""},{"old":"/api/v1/slo-checklist-items/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/slo-checklist-items/:id","type":0,"val":"slo-checklist-items","end":""},{"old":"/api/v1/slo-checklist-items/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['slo_checklist_items.update']['types'],
  },
  'slo_checklist_items.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/slo-checklist-items/:id',
    tokens: [{"old":"/api/v1/slo-checklist-items/:id","type":0,"val":"api","end":""},{"old":"/api/v1/slo-checklist-items/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/slo-checklist-items/:id","type":0,"val":"slo-checklist-items","end":""},{"old":"/api/v1/slo-checklist-items/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['slo_checklist_items.destroy']['types'],
  },
  'slo_validations.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/slo-validations',
    tokens: [{"old":"/api/v1/slo-validations","type":0,"val":"api","end":""},{"old":"/api/v1/slo-validations","type":0,"val":"v1","end":""},{"old":"/api/v1/slo-validations","type":0,"val":"slo-validations","end":""}],
    types: placeholder as Registry['slo_validations.index']['types'],
  },
  'slo_validations.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/slo-validations/:id',
    tokens: [{"old":"/api/v1/slo-validations/:id","type":0,"val":"api","end":""},{"old":"/api/v1/slo-validations/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/slo-validations/:id","type":0,"val":"slo-validations","end":""},{"old":"/api/v1/slo-validations/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['slo_validations.show']['types'],
  },
  'slo_validations.store': {
    methods: ["POST"],
    pattern: '/api/v1/slo-validations',
    tokens: [{"old":"/api/v1/slo-validations","type":0,"val":"api","end":""},{"old":"/api/v1/slo-validations","type":0,"val":"v1","end":""},{"old":"/api/v1/slo-validations","type":0,"val":"slo-validations","end":""}],
    types: placeholder as Registry['slo_validations.store']['types'],
  },
  'slo_validations.update': {
    methods: ["PUT"],
    pattern: '/api/v1/slo-validations/:id',
    tokens: [{"old":"/api/v1/slo-validations/:id","type":0,"val":"api","end":""},{"old":"/api/v1/slo-validations/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/slo-validations/:id","type":0,"val":"slo-validations","end":""},{"old":"/api/v1/slo-validations/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['slo_validations.update']['types'],
  },
  'slo_validations.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/slo-validations/:id',
    tokens: [{"old":"/api/v1/slo-validations/:id","type":0,"val":"api","end":""},{"old":"/api/v1/slo-validations/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/slo-validations/:id","type":0,"val":"slo-validations","end":""},{"old":"/api/v1/slo-validations/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['slo_validations.destroy']['types'],
  },
  'slo_validation_checks.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/slo-validation-checks',
    tokens: [{"old":"/api/v1/slo-validation-checks","type":0,"val":"api","end":""},{"old":"/api/v1/slo-validation-checks","type":0,"val":"v1","end":""},{"old":"/api/v1/slo-validation-checks","type":0,"val":"slo-validation-checks","end":""}],
    types: placeholder as Registry['slo_validation_checks.index']['types'],
  },
  'slo_validation_checks.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/slo-validation-checks/:id',
    tokens: [{"old":"/api/v1/slo-validation-checks/:id","type":0,"val":"api","end":""},{"old":"/api/v1/slo-validation-checks/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/slo-validation-checks/:id","type":0,"val":"slo-validation-checks","end":""},{"old":"/api/v1/slo-validation-checks/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['slo_validation_checks.show']['types'],
  },
  'slo_validation_checks.store': {
    methods: ["POST"],
    pattern: '/api/v1/slo-validation-checks',
    tokens: [{"old":"/api/v1/slo-validation-checks","type":0,"val":"api","end":""},{"old":"/api/v1/slo-validation-checks","type":0,"val":"v1","end":""},{"old":"/api/v1/slo-validation-checks","type":0,"val":"slo-validation-checks","end":""}],
    types: placeholder as Registry['slo_validation_checks.store']['types'],
  },
  'slo_validation_checks.update': {
    methods: ["PUT"],
    pattern: '/api/v1/slo-validation-checks/:id',
    tokens: [{"old":"/api/v1/slo-validation-checks/:id","type":0,"val":"api","end":""},{"old":"/api/v1/slo-validation-checks/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/slo-validation-checks/:id","type":0,"val":"slo-validation-checks","end":""},{"old":"/api/v1/slo-validation-checks/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['slo_validation_checks.update']['types'],
  },
  'slo_validation_checks.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/slo-validation-checks/:id',
    tokens: [{"old":"/api/v1/slo-validation-checks/:id","type":0,"val":"api","end":""},{"old":"/api/v1/slo-validation-checks/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/slo-validation-checks/:id","type":0,"val":"slo-validation-checks","end":""},{"old":"/api/v1/slo-validation-checks/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['slo_validation_checks.destroy']['types'],
  },
  'slo_validation_images.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/slo-validation-images',
    tokens: [{"old":"/api/v1/slo-validation-images","type":0,"val":"api","end":""},{"old":"/api/v1/slo-validation-images","type":0,"val":"v1","end":""},{"old":"/api/v1/slo-validation-images","type":0,"val":"slo-validation-images","end":""}],
    types: placeholder as Registry['slo_validation_images.index']['types'],
  },
  'slo_validation_images.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/slo-validation-images/:id',
    tokens: [{"old":"/api/v1/slo-validation-images/:id","type":0,"val":"api","end":""},{"old":"/api/v1/slo-validation-images/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/slo-validation-images/:id","type":0,"val":"slo-validation-images","end":""},{"old":"/api/v1/slo-validation-images/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['slo_validation_images.show']['types'],
  },
  'slo_validation_images.store': {
    methods: ["POST"],
    pattern: '/api/v1/slo-validation-images',
    tokens: [{"old":"/api/v1/slo-validation-images","type":0,"val":"api","end":""},{"old":"/api/v1/slo-validation-images","type":0,"val":"v1","end":""},{"old":"/api/v1/slo-validation-images","type":0,"val":"slo-validation-images","end":""}],
    types: placeholder as Registry['slo_validation_images.store']['types'],
  },
  'slo_validation_images.update': {
    methods: ["PUT"],
    pattern: '/api/v1/slo-validation-images/:id',
    tokens: [{"old":"/api/v1/slo-validation-images/:id","type":0,"val":"api","end":""},{"old":"/api/v1/slo-validation-images/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/slo-validation-images/:id","type":0,"val":"slo-validation-images","end":""},{"old":"/api/v1/slo-validation-images/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['slo_validation_images.update']['types'],
  },
  'slo_validation_images.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/slo-validation-images/:id',
    tokens: [{"old":"/api/v1/slo-validation-images/:id","type":0,"val":"api","end":""},{"old":"/api/v1/slo-validation-images/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/slo-validation-images/:id","type":0,"val":"slo-validation-images","end":""},{"old":"/api/v1/slo-validation-images/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['slo_validation_images.destroy']['types'],
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
