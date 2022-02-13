import { Specification } from "../../entities";
import { ISpecificationsRepository, ICreateSpecificationDTO } from "../specifications/ISpecificationsRepository";


class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];
  private static INSTANCE: SpecificationsRepository

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }
    return SpecificationsRepository.INSTANCE;
  }

  list(): Specification[] {
    return this.specifications;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();
    Object.assign(specification, {
      name,
      description,
      created_at: new Date()
    });
    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(spec => spec.name === name);
    return specification;
  }
  
}

export { SpecificationsRepository }