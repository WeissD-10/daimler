import type { Prisma } from '@prisma/client';

export const colors: Prisma.ColorCreateArgs[] = [
  {
    data: {
      color: 'rot',
      price: 1234,
      metallic: true
    }
  },
  {
    data: {
      color: 'grün',
      price: 1234,
      metallic: false
    }
  },
  {
    data: {
      color: 'silber',
      price: 1234,
      metallic: true
    }
  },
  {
    data: {
      color: 'schwarz',
      price: 1234,
      metallic: true
    }
  },
  {
    data: {
      color: 'gelb',
      price: 1234,
      metallic: false
    }
  },
]
