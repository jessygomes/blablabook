import 'dotenv/config'
import { PrismaClient } from '../generated/prisma'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const connectionString = process.env.DATABASE_URL

const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)

const prisma = new PrismaClient({ adapter })

async function main() {
  try {
    // Roles
    const adminRole = await prisma.role.upsert({
      where: { name: 'ADMIN' },
      update: {},
      create: {
        name: 'ADMIN',
      },
    })

    const userRole = await prisma.role.upsert({
      where: { name: 'USER' },
      update: {},
      create: {
        name: 'USER',
      },
    })

    console.log('Roles créés')

    // Admin
    const admin = await prisma.user.upsert({
      where: { email: 'admin@example.com' },
      update: {},
      create: {
        email: 'admin@example.com',
        username: 'admin',
        password: 'password123',
        isPrivate: false,
        roleId: adminRole.id,
      },
    })

    // User 1
    const john = await prisma.user.upsert({
      where: { email: 'john@example.com' },
      update: {},
      create: {
        email: 'john@example.com',
        username: 'john',
        password: 'password123',
        isPrivate: false,
        roleId: userRole.id,
      },
    })

    // User 2
    const jane = await prisma.user.upsert({
      where: { email: 'jane@example.com' },
      update: {},
      create: {
        email: 'jane@example.com',
        username: 'jane',
        password: 'password123',
        isPrivate: true,
        roleId: userRole.id,
      },
    })

    console.log('Users créés:', { admin, john, jane })
    console.log('Seed terminé avec succès!')
  } catch (error) {
    console.error('Erreur:', error)
    throw error
  }
}

main()
  .catch((e) => {
    console.error('Erreur pendant le seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
    await pool.end()
  })