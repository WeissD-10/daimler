import {
  Body,
  Controller,
  Get,
  Post,
  Logger,
} from '@nestjs/common';
import { ConfigService } from './config.service';
import { VehicleCreationDTO, ColorDTO, ExtraDTO, MotorDTO } from '../../classes';
import { ApiExtraModels, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('configs')
export class ConfigController {
  private readonly logger = new Logger(ConfigController.name);
  constructor(private readonly configService: ConfigService) {}
  @Get('colors')
  @ApiExtraModels(ColorDTO)
  @ApiResponse({
    status: 200,
    type: ColorDTO,
    isArray: true
  })
  getColors(): Promise<ColorDTO[]> {
    return this.configService.findColors()
  }
  @Get('extras')
  @ApiExtraModels(ExtraDTO)
  @ApiResponse({
    status: 200,
    type: ExtraDTO,
    isArray: true
  })
  @ApiOperation({ summary: 'return extras DTO' })
  getExtras(): Promise<ExtraDTO[]> {
    return this.configService.findExtras()
  }
  @Get('motors')
  @ApiExtraModels(MotorDTO)
  @ApiResponse({
    status: 200,
    type: MotorDTO,
    isArray: true
  })
  @ApiOperation({ summary: 'return motor DTO' })
  getMotors(): Promise<MotorDTO[]> {
    return this.configService.findMotors()
  }
  @Post()
  @ApiOperation({ summary: 'create configurated vehicle' })
  @ApiResponse({ status: 201, description: 'created.', type: VehicleCreationDTO })
  create(@Body() vehicle: VehicleCreationDTO): Promise<VehicleCreationDTO> {
    return this.configService.createConfig(vehicle);
  }
  @Get()
  @ApiExtraModels(VehicleCreationDTO)
  @ApiResponse({
    status: 200,
    type: VehicleCreationDTO,
    isArray: true
  })
  getAllConfigurations(): Promise<VehicleCreationDTO[]> {
    return this.configService.findAllConfigs()
  }
}
