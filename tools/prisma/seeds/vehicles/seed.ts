import type { Prisma } from '@prisma/client';

export const vehicles: Prisma.VehicleCreateArgs[] = [
  {
    data: {
      class: 'C-Klasse',
      type: 'Cabriolet',
      power: 150,
      color: 'rot',
      metallicColor: false,
      colorId: 1,
      extras: ['Panoramadach'],
      basePrice: 54430
    },
  },
  {
    data: {
      class: 'E-Klasse',
      type: 'Limousine',
      power: 118,
      color: 'grün',
      metallicColor: false,
      colorId: 2,
      extras: ['Lenkradheizung'],
      basePrice: 53823
    },
  },
  {
    data: {
      class: 'EQB',
      type: 'SUV',
      power: 385,
      color: 'silber',
      metallicColor: true,
      colorId: 3,
      extras: ['Leder, Lenkradheizung'],
      basePrice: 55550
    },
  },
  {
    data: {
      class: 'G-Klasse',
      type: 'Geländewagen',
      power: 243,
      color: 'schwarz',
      metallicColor: true,
      colorId: 4,
      extras: ['Soundsystem, Panoramadach'],
      basePrice: 118256
    },
  },
  {
    data: {
      class: 'AMG',
      type: 'Coupê',
      power: 287,
      color: 'gelb',
      metallicColor: false,
      colorId: 5,
      extras: ['Klimaanlage, Lenkradheizung'],
      basePrice: 102518
    },
  },
];
