import { container } from 'tsyringe'
import { ICategoriesRepository } from '../../modules'
import { CategoriesRepository } from '../../modules'
import { ISpecificationsRepository } from '../../modules'
import { SpecificationsRepository } from '../../modules'

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
)

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository",
    SpecificationsRepository
)

