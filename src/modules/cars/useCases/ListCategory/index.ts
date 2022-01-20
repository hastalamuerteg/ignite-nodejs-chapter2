import { CategoriesRepository } from "../../repositories";
import { ListCategoryUseCase } from './ListCategoryUseCase'
import { ListCategoryController } from './ListCategoryController'

const categoriesRepository = new CategoriesRepository();
const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository);
const listCategoryController = new ListCategoryController(listCategoryUseCase);

export { listCategoryController }