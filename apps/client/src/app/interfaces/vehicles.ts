export interface IVehicle {
  class: string
  type: string
  power: number
  color: string
  metallicColor: boolean
  extras?: string[]
  colorId:  number
}

export interface IBaseVehicle extends IVehicle {
  id: number
  basePrice: number
}

export interface ICreateVehicle extends IVehicle {
  price: number
}

