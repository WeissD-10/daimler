import { ApiProperty } from "@nestjs/swagger"

export class ExtraDTO {
    @ApiProperty()
    name: string
    @ApiProperty()
    price: number
}
