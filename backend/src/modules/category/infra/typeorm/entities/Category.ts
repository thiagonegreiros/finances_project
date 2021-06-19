import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import Accounts from "@modules/accounts/infra/typeorm/entities/Accounts";

@Entity("categories")
export class Category {
  @PrimaryColumn()
  id?: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Accounts, (account) => account.category, {
    cascade: true,
  })
  account: Accounts[];

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
