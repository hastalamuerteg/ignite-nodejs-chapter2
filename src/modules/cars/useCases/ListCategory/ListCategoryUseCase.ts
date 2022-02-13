import { Category } from "../../entities";
import { ICategoriesRepository } from "../../repositories";

class ListCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute(): Promise<Category[]> {
    return await this.categoriesRepository.list()
  }
}

export { ListCategoryUseCase }