import { ApiProperty } from "@nestjs/swagger";
import { Vehicle } from ".";


export class VehicleCreationDTO extends Vehicle {
  @ApiProperty()
  price: number
  @ApiProperty()
  colorId: number
}
