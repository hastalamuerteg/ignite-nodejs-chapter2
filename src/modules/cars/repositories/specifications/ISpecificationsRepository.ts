import { Specification } from "../../entities";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  list(): Specification[]
  create({name, description}: ICreateSpecificationDTO): void
  findByName(name: string): Specification
}

export { ISpecificationsRepository, ICreateSpecificationDTO }