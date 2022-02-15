import { Router } from 'express';
import multer from 'multer'
import { CreateCategoryController } from '../modules/cars/useCases/CreateCategory/CreateCategoryController';
import { ListCategoryController } from '../modules/cars/useCases/ListCategory/ListCategoryController';
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/ImportCategoryController'

const categoriesRoutes = Router();
const upload = multer({
  dest: './tmp'
})

const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();
const importCategoryController = new ImportCategoryController();


categoriesRoutes.post('/', createCategoryController.handle)

categoriesRoutes.get('/', listCategoryController.handle)

categoriesRoutes.post('/import', upload.single('file'), importCategoryController.handle)

export { categoriesRoutes };