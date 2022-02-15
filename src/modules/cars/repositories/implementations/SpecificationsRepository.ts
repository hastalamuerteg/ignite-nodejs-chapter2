import { Specification } from "../../entities";
import { ISpecificationsRepository, ICreateSpecificationDTO } from "../specifications/ISpecificationsRepository";
import { Repository, getRepository } from 'typeorm'

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>

  constructor() {
    this.repository = getRepository(Specification)
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({name, description});
    await this.repository.save(specification);
  }

  async list(): Promise<Specification[]> {
    const list = await this.repository.find();
    return list;
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({name});
    return specification;
  }
}

export { SpecificationsRepository }