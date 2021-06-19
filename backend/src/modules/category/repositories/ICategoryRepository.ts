import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";
import { Category } from "../infra/typeorm/entities/Category";

export interface ICategoryRepository {
  create(data: ICreateCategoryDTO): Promise<void>;
  list(): Promise<Category[]>;
}
