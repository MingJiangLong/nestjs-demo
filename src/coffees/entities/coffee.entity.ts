import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('coffee') // sql table 
export class Coffee {

  @PrimaryGeneratedColumn()
  id: number


  @Column()
  name: string

  @Column('json', { nullable: true })
  flavor: string[]
}