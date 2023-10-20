import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateCoffeeDto } from "./dto/create-coffee.dto";
import { Repository } from "typeorm";
import { Coffee } from "./entities/coffee.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { UpdateCoffeeDto } from "./dto/update-coffee.dto";

@Injectable()
export class CoffeeService {

  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>
  ) { }

  async create(createCoffeeDto: CreateCoffeeDto) {
    const coffee = this.coffeeRepository.create(createCoffeeDto);
    return this.coffeeRepository.save(coffee);
  }

  async update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    const coffee = await this.coffeeRepository.preload({
      id,
      ...updateCoffeeDto
    })
    if (!coffee) throw new NotFoundException('coffee not found')
    return this.coffeeRepository.save(coffee)
  }

  async remove(id: number) {
    const coffee = await this.findOneById(id)
    return this.coffeeRepository.remove(coffee);
  }

  async findOneById(id: number) {
    const coffee = await this.coffeeRepository.findOneBy({ id })
    if (coffee) throw new NotFoundException('COFFEE NOT FOUND')
    return coffee
  }
}