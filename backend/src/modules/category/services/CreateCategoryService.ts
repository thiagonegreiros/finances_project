import { inject, injectable } from "tsyringe";

import { ICategoryRepository } from "../repositories/ICategoryRepository";

interface IRequest {
  description: string;
}

@injectable()
export class CreateCategoryService {
  constructor(
    @inject("CategoriesRepository")
    private categories: ICategoryRepository
  ) {}

  async execute({ description }: IRequest): Promise<void> {
    await this.categories.create({ description });
  }
}
