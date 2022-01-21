import { Specification } from "../../model";
import { ISpecificationsRepository } from "../../repositories";

class ListSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute(): Specification[] {
    return this.specificationsRepository.list()
  }
}

export { ListSpecificationUseCase }