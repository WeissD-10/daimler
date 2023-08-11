import { Injectable } from '@nestjs/common';
import { ColorDTO, ExtraDTO, MotorDTO, VehicleCreationDTO} from '../../classes'
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ConfigService {
  constructor(private prisma: PrismaService) {}
  //Possible Modifications
  async findColors(): Promise<ColorDTO[]> {
    const colors = await this.prisma.color.findMany({});

    return colors;
  }
  async findMotors(): Promise<MotorDTO[]> {
    const motors = await this.prisma.motor.findMany({});

    return motors;
  }
  async findExtras(): Promise<ExtraDTO[]> {
    const extras = await this.prisma.extra.findMany({});

    return extras;
  }
  //Configured Vehicle
  async createConfig(configData: VehicleCreationDTO): Promise<VehicleCreationDTO> {
    const vehicle = await this.prisma.configuratedVehicle.create({
      data: {
        price: configData.price,
        color: configData.color,
        class: configData.class,
        type: configData.type,
        extras: configData.extras,
        power: configData.power,
        metallicColor: configData.metallicColor,
        colorId: configData.colorId
      }
    })
    return vehicle
    }
    async findAllConfigs(): Promise<VehicleCreationDTO[]> {
      const vehicles = await this.prisma.configuratedVehicle.findMany({})

      return vehicles;
    }
}
