import { container } from "tsyringe";

import { CategoriesRepository } from "@modules/category/infra/typeorm/repositories/CategoriesRepository";
import { ICategoryRepository } from "@modules/category/repositories/ICategoryRepository";

container.registerSingleton<ICategoryRepository>(
  "CategoriesRepository",
  CategoriesRepository
);
