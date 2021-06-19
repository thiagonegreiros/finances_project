import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  UpdateDateColumn,
  Timestamp,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Category } from "@modules/category/infra/typeorm/entities/Category";

@Entity("accounts")
export default class Accounts {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column("decimal", { precision: 5, scale: 2 })
  price: number;

  @Column()
  qty_portion: number;

  @Column()
  due_date: Date;

  @Column()
  status_account: boolean;

  @Column()
  category_id: string;

  @ManyToOne(() => Category, (category) => category.account)
  @JoinColumn({ name: "category_id" })
  category: Category;

  @UpdateDateColumn()
  update_at: Timestamp;

  @CreateDateColumn()
  created_at: Timestamp;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
