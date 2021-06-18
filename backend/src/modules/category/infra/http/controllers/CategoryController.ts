import { Request, response, Response } from 'express';
import { getRepository } from 'typeorm';
import Categories from '../../typeorm/repositories/Categories';


class CategoryController{
  async createCategory(req: Request, res: Response) {
    const repository = getRepository(Categories);
    const { description } = req.body;

    const category = repository.create({ description });
    await repository.save(category);

    return res.json(category);
  }

  async listCategory(req: Request, res: Response) {
    return res.json(await getRepository(Categories).find());
  }
}

export default new CategoryController;