import {
  Controller,
  Get,
  Logger,
} from '@nestjs/common';
import { VehicleDTO } from '../../classes';
import { VehicleService } from './vehicle.service';

@Controller('vehicles')
export class VehicleController {
  private readonly logger = new Logger(VehicleController.name);
  constructor(private readonly vehicleService: VehicleService) {}
  @Get()
  getAll(): Promise<VehicleDTO[]> {
    return this.vehicleService.findAllVehicles()
  }
}
