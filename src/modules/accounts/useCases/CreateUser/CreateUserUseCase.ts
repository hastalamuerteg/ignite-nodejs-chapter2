import { inject, injectable } from "tsyringe";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

interface IRequest {
  name: string;
  username: string;
  password: string;
  email: string;
  driver_license: string;
  avatar: string;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: UsersRepository
  ) {}

  async execute({
    name,
    username,
    password,
    email,
    driver_license,
    avatar,
  }: IRequest) {
    const userAlreadyExists = await this.usersRepository.findByUsername(
      username
    );
    if (userAlreadyExists) {
      throw new Error("User already exists");
    }
    await this.usersRepository.create({
      name,
      username,
      password,
      email,
      driver_license,
      avatar,
    });
  }
}

export { CreateUserUseCase };
