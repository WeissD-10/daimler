import type { Prisma } from '@prisma/client';

export const extras: Prisma.ExtraCreateArgs[] = [
  {
    data: {
      name: 'Lenkradheizung',
      price: 1234
    }
  },
  {
    data: {
      name: 'Panoramadach',
      price: 123
    }
  },
  {
    data: {
      name: 'Leder',
      price: 12
    }
  },
  {
    data: {
      name: 'Soundsystem',
      price: 122
    }
  },
  {
    data: {
      name: 'Klimaanlage',
      price: 500
    }
  },
  {
    data: {
      name: 'ACC',
      price: 1000
    }
  },
]
