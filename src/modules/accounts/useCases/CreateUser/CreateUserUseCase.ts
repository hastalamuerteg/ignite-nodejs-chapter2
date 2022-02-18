import { inject, injectable } from "tsyringe";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { hash } from "bcrypt";

interface IRequest {
  name: string;
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

  async execute({ name, password, email, driver_license, avatar }: IRequest) {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);
    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const hashPassword = await hash(password, 8);

    await this.usersRepository.create({
      name,
      password: hashPassword,
      email,
      driver_license,
      avatar,
    });
  }
}

export { CreateUserUseCase };
