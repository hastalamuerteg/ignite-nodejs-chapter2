import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) throw new Error("Email or password incorrect");
    const passwordMatches = await compare(password, user.password);

    if (!passwordMatches) throw new Error("Email or password incorrect");
    const token = sign({}, "23f9a7e5cf527555115b58c40b725fff", {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenResponse: IResponse = {
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    };

    return tokenResponse;
  }
}

export { AuthenticateUserUseCase };
