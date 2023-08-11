import { ApiProperty } from "@nestjs/swagger"
import { Vehicle } from "./vehicle"


export class VehicleDTO extends Vehicle {
    @ApiProperty()
    id:     number
    @ApiProperty()
    basePrice: number
}
