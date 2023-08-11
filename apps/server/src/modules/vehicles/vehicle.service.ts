import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { VehicleDTO } from '../../classes';

@Injectable()
export class VehicleService {
  constructor(private prisma: PrismaService) {}

  async findAllVehicles(): Promise<VehicleDTO[]> {
    const vehicles = await this.prisma.vehicle.findMany({});

    return vehicles;
  }
}

