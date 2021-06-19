import { getRepository, Repository } from "typeorm";

import { ICreateCategoryDTO } from "@modules/category/dtos/ICreateCategoryDTO";
import { ICategoryRepository } from "@modules/category/repositories/ICategoryRepository";

import { Category } from "../entities/Category";

export class CategoriesRepository implements ICategoryRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({ description });

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    return this.repository.find();
  }
}
