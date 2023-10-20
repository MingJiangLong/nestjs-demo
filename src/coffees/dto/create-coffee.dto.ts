import { IsString } from "class-validator"

export class CreateCoffeeDto {

  @IsString({ message: "名字为字符串" })
  name: string

  @IsString({ message: "" })
  brand: string

  @IsString({ each: true })
  flavor: string[]
}