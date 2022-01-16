import { Router } from 'express';
import { CategoriesRepository } from '../modules/cars';
import { CreateCategoryService } from '../modules/cars';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body;
  
  const createCategoryService = new CreateCategoryService(categoriesRepository);
  createCategoryService.execute({ name, description})
  

  return res.status(201).send();
})

categoriesRoutes.get('/', (req, res) => {
  const categoriesList = categoriesRepository.list();
  return res.status(200).send(categoriesList);
})

export { categoriesRoutes };