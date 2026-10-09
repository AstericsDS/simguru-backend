/* eslint-disable prettier/prettier */
/// <reference path="../manifest.d.ts" />

import type { ExtractBody, ExtractErrorResponse, ExtractQuery, ExtractQueryForGet, ExtractResponse } from '@tuyau/core/types'
import type { InferInput, SimpleError } from '@vinejs/vine/types'

export type ParamValue = string | number | bigint | boolean

export interface Registry {
  'auth.new_account.store': {
    methods: ["POST"]
    pattern: '/api/v1/auth/signup'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/user').signupValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/user').signupValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/new_account_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/new_account_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'auth.access_tokens.store': {
    methods: ["POST"]
    pattern: '/api/v1/auth/login'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/user').loginValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/user').loginValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/access_tokens_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/access_tokens_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'profile.profile.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/account/profile'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/profile_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/profile_controller').default['show']>>>
    }
  }
  'profile.access_tokens.destroy': {
    methods: ["POST"]
    pattern: '/api/v1/account/logout'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/access_tokens_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/access_tokens_controller').default['destroy']>>>
    }
  }
  'profile.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/users'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/profile_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/profile_controller').default['index']>>>
    }
  }
  'roles.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/roles'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/roles_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/roles_controller').default['index']>>>
    }
  }
  'roles.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/roles/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/roles_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/roles_controller').default['show']>>>
    }
  }
  'roles.store': {
    methods: ["POST"]
    pattern: '/api/v1/roles'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/role').createRoleValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/role').createRoleValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/roles_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/roles_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'roles.update': {
    methods: ["PUT"]
    pattern: '/api/v1/roles/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/role').createRoleValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/role').createRoleValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/roles_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/roles_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'roles.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/roles/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/roles_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/roles_controller').default['destroy']>>>
    }
  }
  'campuses.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/campuses'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/campuses_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/campuses_controller').default['index']>>>
    }
  }
  'campuses.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/campuses/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/campuses_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/campuses_controller').default['show']>>>
    }
  }
  'campuses.store': {
    methods: ["POST"]
    pattern: '/api/v1/campuses'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/campus').createCampusValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/campus').createCampusValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/campuses_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/campuses_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'campuses.update': {
    methods: ["PUT"]
    pattern: '/api/v1/campuses/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/campus').createCampusValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/campus').createCampusValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/campuses_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/campuses_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'campuses.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/campuses/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/campuses_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/campuses_controller').default['destroy']>>>
    }
  }
  'buildings.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/buildings'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/buildings_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/buildings_controller').default['index']>>>
    }
  }
  'buildings.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/buildings/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/buildings_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/buildings_controller').default['show']>>>
    }
  }
  'buildings.store': {
    methods: ["POST"]
    pattern: '/api/v1/buildings'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/building').createBuildingValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/building').createBuildingValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/buildings_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/buildings_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'buildings.update': {
    methods: ["PUT"]
    pattern: '/api/v1/buildings/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/building').createBuildingValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/building').createBuildingValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/buildings_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/buildings_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'buildings.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/buildings/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/buildings_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/buildings_controller').default['destroy']>>>
    }
  }
  'rooms.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/rooms'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/rooms_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/rooms_controller').default['index']>>>
    }
  }
  'rooms.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/rooms/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/rooms_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/rooms_controller').default['show']>>>
    }
  }
  'rooms.store': {
    methods: ["POST"]
    pattern: '/api/v1/rooms'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/room').createRoomValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/room').createRoomValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/rooms_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/rooms_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'rooms.update': {
    methods: ["PUT"]
    pattern: '/api/v1/rooms/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/room').createRoomValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/room').createRoomValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/rooms_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/rooms_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'rooms.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/rooms/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/rooms_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/rooms_controller').default['destroy']>>>
    }
  }
  'assets.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/assets'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/assets_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/assets_controller').default['index']>>>
    }
  }
  'assets.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/assets/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/assets_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/assets_controller').default['show']>>>
    }
  }
  'assets.store': {
    methods: ["POST"]
    pattern: '/api/v1/assets'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/asset').createAssetValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/asset').createAssetValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/assets_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/assets_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'assets.update': {
    methods: ["PUT"]
    pattern: '/api/v1/assets/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/asset').createAssetValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/asset').createAssetValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/assets_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/assets_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'assets.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/assets/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/assets_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/assets_controller').default['destroy']>>>
    }
  }
  'maintenance_logs.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/maintenance-logs'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/maintenance_logs_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/maintenance_logs_controller').default['index']>>>
    }
  }
  'maintenance_logs.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/maintenance-logs/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/maintenance_logs_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/maintenance_logs_controller').default['show']>>>
    }
  }
  'maintenance_logs.store': {
    methods: ["POST"]
    pattern: '/api/v1/maintenance-logs'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/maintenance_log').createMaintenanceLogValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/maintenance_log').createMaintenanceLogValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/maintenance_logs_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/maintenance_logs_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'slo_certificates.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/slo-certificates'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/slo_certificates_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/slo_certificates_controller').default['index']>>>
    }
  }
  'slo_certificates.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/slo-certificates/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/slo_certificates_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/slo_certificates_controller').default['show']>>>
    }
  }
  'slo_certificates.store': {
    methods: ["POST"]
    pattern: '/api/v1/slo-certificates'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/slo_certificate').createSloCertificateValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/slo_certificate').createSloCertificateValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/slo_certificates_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/slo_certificates_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'slo_certificates.update': {
    methods: ["PUT"]
    pattern: '/api/v1/slo-certificates/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/slo_certificate').createSloCertificateValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/slo_certificate').createSloCertificateValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/slo_certificates_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/slo_certificates_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'slo_certificates.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/slo-certificates/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/slo_certificates_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/slo_certificates_controller').default['destroy']>>>
    }
  }
  'slo_checklist_items.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/slo-checklist-items'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/slo_checklist_items_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/slo_checklist_items_controller').default['index']>>>
    }
  }
  'slo_checklist_items.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/slo-checklist-items/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/slo_checklist_items_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/slo_checklist_items_controller').default['show']>>>
    }
  }
  'slo_checklist_items.store': {
    methods: ["POST"]
    pattern: '/api/v1/slo-checklist-items'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/slo_checklist_item').createSloChecklistItemValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/slo_checklist_item').createSloChecklistItemValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/slo_checklist_items_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/slo_checklist_items_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'slo_checklist_items.update': {
    methods: ["PUT"]
    pattern: '/api/v1/slo-checklist-items/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/slo_checklist_item').createSloChecklistItemValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/slo_checklist_item').createSloChecklistItemValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/slo_checklist_items_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/slo_checklist_items_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'slo_checklist_items.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/slo-checklist-items/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/slo_checklist_items_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/slo_checklist_items_controller').default['destroy']>>>
    }
  }
  'slo_validations.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/slo-validations'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/slo_validations_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/slo_validations_controller').default['index']>>>
    }
  }
  'slo_validations.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/slo-validations/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/slo_validations_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/slo_validations_controller').default['show']>>>
    }
  }
  'slo_validations.store': {
    methods: ["POST"]
    pattern: '/api/v1/slo-validations'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/slo_validation').createSloValidationValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/slo_validation').createSloValidationValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/slo_validations_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/slo_validations_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'slo_validations.update': {
    methods: ["PUT"]
    pattern: '/api/v1/slo-validations/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/slo_validation').createSloValidationValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/slo_validation').createSloValidationValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/slo_validations_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/slo_validations_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'slo_validations.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/slo-validations/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/slo_validations_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/slo_validations_controller').default['destroy']>>>
    }
  }
  'slo_validation_checks.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/slo-validation-checks'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/slo_validation_checks_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/slo_validation_checks_controller').default['index']>>>
    }
  }
  'slo_validation_checks.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/slo-validation-checks/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/slo_validation_checks_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/slo_validation_checks_controller').default['show']>>>
    }
  }
  'slo_validation_checks.store': {
    methods: ["POST"]
    pattern: '/api/v1/slo-validation-checks'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/slo_validation_check').createSloValidationCheckValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/slo_validation_check').createSloValidationCheckValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/slo_validation_checks_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/slo_validation_checks_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'slo_validation_checks.update': {
    methods: ["PUT"]
    pattern: '/api/v1/slo-validation-checks/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/slo_validation_check').createSloValidationCheckValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/slo_validation_check').createSloValidationCheckValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/slo_validation_checks_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/slo_validation_checks_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'slo_validation_checks.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/slo-validation-checks/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/slo_validation_checks_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/slo_validation_checks_controller').default['destroy']>>>
    }
  }
  'slo_validation_images.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/slo-validation-images'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/slo_validation_images_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/slo_validation_images_controller').default['index']>>>
    }
  }
  'slo_validation_images.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/slo-validation-images/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/slo_validation_images_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/slo_validation_images_controller').default['show']>>>
    }
  }
  'slo_validation_images.store': {
    methods: ["POST"]
    pattern: '/api/v1/slo-validation-images'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/slo_validation_image').createSloValidationImageValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/slo_validation_image').createSloValidationImageValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/slo_validation_images_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/slo_validation_images_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'slo_validation_images.update': {
    methods: ["PUT"]
    pattern: '/api/v1/slo-validation-images/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/slo_validation_image').createSloValidationImageValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/slo_validation_image').createSloValidationImageValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/slo_validation_images_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/slo_validation_images_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'slo_validation_images.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/slo-validation-images/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/slo_validation_images_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/slo_validation_images_controller').default['destroy']>>>
    }
  }
}
