import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"

export class ColorDTO {
  @ApiProperty()
  id: number;
  @ApiProperty()
  color: string;
  @ApiPropertyOptional()
  metallic?: boolean;
  @ApiProperty()
  price: number;
}
