/* eslint-disable no-console -- need console statement for status report */
import { PrismaClient } from '@prisma/client';

import { seedDb } from './seeder';

const prisma = new PrismaClient();

seedDb(prisma, true)
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    console.log('Finished seeding DB');
    await prisma.$disconnect();
    process.exit(0);
  });
