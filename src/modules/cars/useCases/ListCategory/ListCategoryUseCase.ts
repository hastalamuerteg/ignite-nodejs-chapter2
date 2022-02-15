import { inject, injectable } from 'tsyringe'

import { Category } from "../../entities";
import { ICategoriesRepository } from "../../repositories";

@injectable()
class ListCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository) {}

  async execute(): Promise<Category[]> {
    return await this.categoriesRepository.list()
  }
}

export { ListCategoryUseCase }