import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, UpdateDateColumn, Timestamp, CreateDateColumn } from 'typeorm';
import Categories from './Categories'

export default class Accounts {
  
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("decimal", { precision: 5, scale: 2 })
  price: number;

  @Column()
  qty_portion: number;

  @Column()
  due_date: Date;

  @Column()
  status_account: boolean;

  @Column()
  category_id: number;

  @OneToOne(type => Categories)
  @JoinColumn({name: "category_id"})
  categories: Categories

  @UpdateDateColumn()
  update_at: Timestamp;

  @CreateDateColumn()
  created_at: Timestamp;
}