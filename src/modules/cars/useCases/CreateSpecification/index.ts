import { SpecificationsRepository } from '../../repositories'
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'
import { CreateSpecificationController } from './CreateSpecificationController'

const specificationsRepository = null
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository)
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase)

export { createSpecificationController }