import Role from '#models/role'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Role.updateOrCreateMany('code', [
      {
        name: 'Civitas UNJ (Dosen / Mhs)',
        code: 'internal_user',
        description: 'Akses detail peta, denah, inventaris, & ajukan sewa gratis (Dispenses)'
      },
      {
        name: 'Mitra / Umum (Eksternal)',
        code: 'external_user',
        description: 'Mendaftar mandiri, sewa fasilitas komersial (kalkulasi tarif komersial)'
      },
      {
        name: 'Direktur / Subdit Aset',
        code: 'pimpinan',
        description: 'Verifikasi lapangan, approval peminjaman & penerbitan invoice, persetujuan anggaran'
      },
      {
        name: 'Petugas Lapangan',
        code: 'operator_infra',
        description: 'Terima surat tugas digital, scan barcode SLF, isi checklist dinamis & upload foto'
      },
      {
        name: 'Admin Pengembang Infra',
        code: 'admin_infra',
        description: 'Kelola master denah, aset, rancang checklist, penugasan staff'
      },
      {
        name: 'Admin Sistem (Pustikom)',
        code: 'super_admin',
        description: 'Akses penuh, monitor API, eksekusi ETL REFRESH MATERIALIZED VIEW, atur tarif'
      },
      {
        name: 'Auditor / SPI',
        code: 'auditor',
        description: 'Melihat rekam jejak, tracking dokumen, cetak laporan manajerial kepatuhan'
      },
    ])
  }
}