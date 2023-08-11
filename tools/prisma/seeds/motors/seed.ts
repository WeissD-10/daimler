import type { Prisma } from '@prisma/client';

export const motors: Prisma.MotorCreateArgs[] = [
  {
    data: {
      power: 600,
      price: 1234
    }
  },
  {
    data: {
      power: 325,
      price: 123
    }
  },
  {
    data: {
      power: 150,
      price: 12
    }
  },
  {
    data: {
      power: 118,
      price: 122
    }
  },
  {
    data: {
      power: 500,
      price: 500
    }
  },
]
