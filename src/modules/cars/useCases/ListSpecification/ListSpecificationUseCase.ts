import { Specification } from "../../entities";
import { ISpecificationsRepository } from "../../repositories";
import { inject, injectable} from 'tsyringe'

@injectable()
class ListSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository) {}

  async execute(): Promise<Specification[]> {
    return await this.specificationsRepository.list()
  }
}

export { ListSpecificationUseCase }