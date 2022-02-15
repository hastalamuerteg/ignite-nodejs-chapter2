import { Specification } from "../../entities";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  list(): Promise<Specification[]>
  create({name, description}: ICreateSpecificationDTO): Promise<void>
  findByName(name: string): Promise<Specification>
}

export { ISpecificationsRepository, ICreateSpecificationDTO }