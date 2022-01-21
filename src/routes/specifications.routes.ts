import { Router } from 'express'
import { createSpecificationController, listSpecificationController } from '../modules/cars/useCases'


const specificationsRoutes = Router()

specificationsRoutes.post('/', (req, res) => {
  return createSpecificationController.handle(req, res)
})

specificationsRoutes.get('/', (req, res) => {
  return listSpecificationController.handle(req, res)
})

export { specificationsRoutes }