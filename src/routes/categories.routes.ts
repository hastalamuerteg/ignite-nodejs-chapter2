import { Router } from 'express';
import { createCategoryController } from '../modules/cars/useCases/CreateCategory';
import { listCategoryController } from '../modules/cars/useCases/ListCategory';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (req, res) => {
 return createCategoryController.handle(req, res);
})

categoriesRoutes.get('/', (req, res) => {
  return listCategoryController.handle(req, res);
})

export { categoriesRoutes };