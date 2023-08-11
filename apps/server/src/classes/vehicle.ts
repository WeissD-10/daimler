import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"

export class Vehicle {
  @ApiProperty()
  class: string
  @ApiProperty()
  type: string
  @ApiProperty()
  power: number
  @ApiProperty()
  color: string
  @ApiProperty()
  metallicColor: boolean
  @ApiPropertyOptional()
  extras?: string[]
  @ApiProperty()
  colorId:  number
}
