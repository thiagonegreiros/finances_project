import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCategoryService } from "@modules/category/services/CreateCategoryService";

import { CategoriesRepository } from "../../typeorm/repositories/CategoriesRepository";

class CategoryController {
  async create(req: Request, res: Response): Promise<Response> {
    const { description } = req.body;

    const createCategoryService = container.resolve(CreateCategoryService);

    await createCategoryService.execute({ description });

    return res.json(201).send();
  }

  async index(req: Request, res: Response): Promise<Response> {
    const categoryRepository = new CategoriesRepository();

    const listCategory = await categoryRepository.list();

    return res.json(listCategory);
  }
}

export default new CategoryController();
