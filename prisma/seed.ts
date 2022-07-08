// prisma/seed.ts

import { PrismaClient } from '@prisma/client'
import { data } from '../data/posts'
const prisma = new PrismaClient()

async function main() {
  const newUser = await prisma.user.create({
    data: {
      email: `testemail@gmail.com`,
      avatarUrl: 'https://test.com',
      firstName:  'Volodymyr',
      lastName: 'Pelykh',
    },
  })

  const postsUser = data.map((post) => ({
    ...post,
    postedById: newUser.id
  }))

  await prisma.post.createMany({
    data: postsUser,
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })