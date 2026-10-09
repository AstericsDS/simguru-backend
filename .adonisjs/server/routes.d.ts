import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_tokens.store': { paramsTuple?: []; params?: {} }
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'profile.access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'profile.index': { paramsTuple?: []; params?: {} }
    'roles.index': { paramsTuple?: []; params?: {} }
    'roles.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'roles.store': { paramsTuple?: []; params?: {} }
    'roles.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'roles.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'campuses.index': { paramsTuple?: []; params?: {} }
    'campuses.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'campuses.store': { paramsTuple?: []; params?: {} }
    'campuses.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'campuses.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'buildings.index': { paramsTuple?: []; params?: {} }
    'buildings.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'buildings.store': { paramsTuple?: []; params?: {} }
    'buildings.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'buildings.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'rooms.index': { paramsTuple?: []; params?: {} }
    'rooms.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'rooms.store': { paramsTuple?: []; params?: {} }
    'rooms.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'rooms.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'assets.index': { paramsTuple?: []; params?: {} }
    'assets.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'assets.store': { paramsTuple?: []; params?: {} }
    'assets.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'assets.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'maintenance_logs.index': { paramsTuple?: []; params?: {} }
    'maintenance_logs.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'maintenance_logs.store': { paramsTuple?: []; params?: {} }
    'slo_certificates.index': { paramsTuple?: []; params?: {} }
    'slo_certificates.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slo_certificates.store': { paramsTuple?: []; params?: {} }
    'slo_certificates.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slo_certificates.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slo_checklist_items.index': { paramsTuple?: []; params?: {} }
    'slo_checklist_items.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slo_checklist_items.store': { paramsTuple?: []; params?: {} }
    'slo_checklist_items.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slo_checklist_items.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slo_validations.index': { paramsTuple?: []; params?: {} }
    'slo_validations.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slo_validations.store': { paramsTuple?: []; params?: {} }
    'slo_validations.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slo_validations.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slo_validation_checks.index': { paramsTuple?: []; params?: {} }
    'slo_validation_checks.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slo_validation_checks.store': { paramsTuple?: []; params?: {} }
    'slo_validation_checks.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slo_validation_checks.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slo_validation_images.index': { paramsTuple?: []; params?: {} }
    'slo_validation_images.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slo_validation_images.store': { paramsTuple?: []; params?: {} }
    'slo_validation_images.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slo_validation_images.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'profile.index': { paramsTuple?: []; params?: {} }
    'roles.index': { paramsTuple?: []; params?: {} }
    'roles.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'campuses.index': { paramsTuple?: []; params?: {} }
    'campuses.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'buildings.index': { paramsTuple?: []; params?: {} }
    'buildings.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'rooms.index': { paramsTuple?: []; params?: {} }
    'rooms.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'assets.index': { paramsTuple?: []; params?: {} }
    'assets.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'maintenance_logs.index': { paramsTuple?: []; params?: {} }
    'maintenance_logs.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slo_certificates.index': { paramsTuple?: []; params?: {} }
    'slo_certificates.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slo_checklist_items.index': { paramsTuple?: []; params?: {} }
    'slo_checklist_items.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slo_validations.index': { paramsTuple?: []; params?: {} }
    'slo_validations.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slo_validation_checks.index': { paramsTuple?: []; params?: {} }
    'slo_validation_checks.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slo_validation_images.index': { paramsTuple?: []; params?: {} }
    'slo_validation_images.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'profile.index': { paramsTuple?: []; params?: {} }
    'roles.index': { paramsTuple?: []; params?: {} }
    'roles.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'campuses.index': { paramsTuple?: []; params?: {} }
    'campuses.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'buildings.index': { paramsTuple?: []; params?: {} }
    'buildings.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'rooms.index': { paramsTuple?: []; params?: {} }
    'rooms.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'assets.index': { paramsTuple?: []; params?: {} }
    'assets.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'maintenance_logs.index': { paramsTuple?: []; params?: {} }
    'maintenance_logs.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slo_certificates.index': { paramsTuple?: []; params?: {} }
    'slo_certificates.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slo_checklist_items.index': { paramsTuple?: []; params?: {} }
    'slo_checklist_items.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slo_validations.index': { paramsTuple?: []; params?: {} }
    'slo_validations.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slo_validation_checks.index': { paramsTuple?: []; params?: {} }
    'slo_validation_checks.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slo_validation_images.index': { paramsTuple?: []; params?: {} }
    'slo_validation_images.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_tokens.store': { paramsTuple?: []; params?: {} }
    'profile.access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'roles.store': { paramsTuple?: []; params?: {} }
    'campuses.store': { paramsTuple?: []; params?: {} }
    'buildings.store': { paramsTuple?: []; params?: {} }
    'rooms.store': { paramsTuple?: []; params?: {} }
    'assets.store': { paramsTuple?: []; params?: {} }
    'maintenance_logs.store': { paramsTuple?: []; params?: {} }
    'slo_certificates.store': { paramsTuple?: []; params?: {} }
    'slo_checklist_items.store': { paramsTuple?: []; params?: {} }
    'slo_validations.store': { paramsTuple?: []; params?: {} }
    'slo_validation_checks.store': { paramsTuple?: []; params?: {} }
    'slo_validation_images.store': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'roles.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'campuses.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'buildings.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'rooms.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'assets.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slo_certificates.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slo_checklist_items.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slo_validations.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slo_validation_checks.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slo_validation_images.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'roles.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'campuses.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'buildings.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'rooms.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'assets.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slo_certificates.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slo_checklist_items.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slo_validations.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slo_validation_checks.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slo_validation_images.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}