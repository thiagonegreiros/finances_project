import { ICreateCategoryDTO } from "@modules/category/dtos/ICreateCategoryDTO";
import { Category } from "@modules/category/infra/typeorm/entities/Category";

import { ICategoryRepository } from "../ICategoryRepository";

export class CategoriesRepositoryInMemory implements ICategoryRepository {
  private categories: Category[] = [];

  async list(): Promise<Category[]> {
    return this.categories;
  }

  async create({ description }: ICreateCategoryDTO): Promise<void> {
    const category = new Category();

    Object.assign(category, { description });

    this.categories.push(category);
  }
}
