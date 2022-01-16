import { Router } from 'express'
import { CreateSpecificationService } from '../modules/cars'
import { SpecificationsRepository } from '../modules/cars'

const specificationsRoutes = Router()
const specificationsRepository = new SpecificationsRepository()

specificationsRoutes.post('/', (req, res) => {
  const { name, description } = req.body;
  const createSpecificationService = new CreateSpecificationService(specificationsRepository) 
  createSpecificationService.execute({ name, description })
  
  return res.status(201).send();
})

specificationsRoutes.get('/', (req, res) => {
  const specifications = specificationsRepository.list()
  
  return res.status(200).json(specifications)
})

export { specificationsRoutes }