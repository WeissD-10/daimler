import type { PrismaClient } from '@prisma/client';
import { vehicles } from './vehicles/seed';
import { colors } from './colors/seed';
import { extras } from './extras/seed';
import { motors } from './motors/seed';


export async function seedDb(
  prisma: PrismaClient,
  isDev: boolean
): Promise<void> {
  await Promise.all(
    vehicles.map(async (vehicle) => prisma.vehicle.create(vehicle))
  );
  await Promise.all(
    colors.map(async (color) => prisma.color.create(color))
  );
  await Promise.all(
    extras.map(async (extra) => prisma.extra.create(extra))
  );
  await Promise.all(
    motors.map(async (motor) => prisma.motor.create(motor))
  );
}
