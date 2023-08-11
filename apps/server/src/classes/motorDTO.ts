import { ApiProperty } from "@nestjs/swagger"

export class MotorDTO {
  @ApiProperty()
  power: number
  @ApiProperty()
  id?: number
}
