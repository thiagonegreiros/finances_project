import { CategoriesRepositoryInMemory } from "../repositories/in-memory/CategoryRepositoryInMemory";
import { CreateCategoryService } from "./CreateCategoryService";

let createCategoryService: CreateCategoryService;
let categoryRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Create Category", () => {
  beforeEach(() => {
    categoryRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryService = new CreateCategoryService(
      categoryRepositoryInMemory
    );
  });

  it("should be able to create a new category", async () => {
    const category = {
      description: "Fixed",
    };

    await createCategoryService.execute({
      description: category.description,
    });

    expect(category.description).toBe("Fixed");
  });
});
