import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity("categories")
export default class Categories{
  
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  description: string;
}