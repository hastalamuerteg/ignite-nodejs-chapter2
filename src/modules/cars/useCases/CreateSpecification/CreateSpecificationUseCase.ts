import { ISpecificationsRepository } from "../../repositories";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}
  execute({ name, description }: IRequest) {
    const specificationAlreadyExists = this.specificationsRepository.findByName(name);
    if (specificationAlreadyExists) {
      throw new Error('Specification already exists')
    }
    return this.specificationsRepository.create({ name, description })
  }
}

export { CreateSpecificationUseCase }