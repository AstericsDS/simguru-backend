import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Campus from '#models/campus'
import Building from '#models/building'
import Room from '#models/room'

export default class extends BaseSeeder {
  async run() {
    // 1. Create a Campus
    const campus = await Campus.create({
      name: 'Universitas Terpadu ' + Math.floor(Math.random() * 1000),
      address: 'Jl. Pendidikan No. 123',
      areaSize: 50000,
      contact: 'info@universitasterpadu.ac.id',
      description: 'Main campus facility with multiple buildings.',
    })

    // 2. Create 3 Buildings
    const buildingsData = [
      {
        campusId: campus.id,
        name: 'Gedung Rektorat',
        buildingArea: 2500,
        landArea: 3000,
        totalFloors: 5,
        description: 'Pusat administrasi kampus',
      },
      {
        campusId: campus.id,
        name: 'Gedung Fakultas Teknik',
        buildingArea: 4000,
        landArea: 4500,
        totalFloors: 4,
        description: 'Fasilitas pembelajaran dan lab teknik',
      },
      {
        campusId: campus.id,
        name: 'Gedung Perpustakaan',
        buildingArea: 1500,
        landArea: 2000,
        totalFloors: 3,
        description: 'Perpustakaan pusat mahasiswa',
      }
    ]

    const buildings = []
    for (const b of buildingsData) {
      buildings.push(await Building.create(b))
    }

    // 3. Create 5 Rooms in random buildings
    const categories = ['classroom', 'laboratory', 'office', 'auditorium'] as const
    const roomsData = []

    for (let i = 1; i <= 5; i++) {
      // Pick a random building from the 3 we just created
      const randomBuilding = buildings[Math.floor(Math.random() * buildings.length)]
      const randomCategory = categories[Math.floor(Math.random() * categories.length)]
      
      const maxFloor = randomBuilding.totalFloors || 1
      const randomFloor = Math.floor(Math.random() * maxFloor) + 1

      roomsData.push({
        buildingId: randomBuilding.id,
        name: `Ruang ${i}0${randomFloor}`,
        floor: randomFloor,
        length: 10 + Math.floor(Math.random() * 5),
        width: 8 + Math.floor(Math.random() * 5),
        height: 3,
        capacity: 30 + Math.floor(Math.random() * 20),
        description: `Ruangan dengan tipe ${randomCategory} di lantai ${randomFloor}`,
        category: randomCategory
      })
    }

    for (const r of roomsData) {
      await Room.create(r)
    }
  }
}
