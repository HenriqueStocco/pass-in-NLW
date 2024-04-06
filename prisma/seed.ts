import { prisma } from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data: {
      id: '66e8431c-d1c2-41d1-89ba-dd0fd09d7646',
      title: 'Unite Summit',
      slug: 'unite-summit',
      details: 'Um evento para devs apaixonados(as) por codigo!.',
      maximumAttendees: 120
    }
  })
}

seed().then(() => {
  console.log('database seeded!')
  prisma.$disconnect()
})