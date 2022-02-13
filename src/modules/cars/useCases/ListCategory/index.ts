import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoryUseCase } from './ListCategoryUseCase'
import { ListCategoryController } from './ListCategoryController'

export default () => {

    const categoriesRepository = new CategoriesRepository();
    const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository);
    const listCategoryController = new ListCategoryController(listCategoryUseCase);
   
    return listCategoryController
}