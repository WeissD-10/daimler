import { Module } from '@nestjs/common';
import { ConfigModule } from './configuration/configuration.module';
import { VehicleModule } from './vehicles/vehicle.module';



@Module({
  imports: [ConfigModule, VehicleModule],
  controllers: [],
})
export class AppModule {}
