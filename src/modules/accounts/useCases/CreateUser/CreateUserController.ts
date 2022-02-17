import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, username, password, email, driver_license, avatar } =
      req.body;
    const createUserUseCase = container.resolve(CreateUserUseCase);
    await createUserUseCase.execute({
      name,
      username,
      password,
      email,
      driver_license,
      avatar,
    });

    return res.status(200).send();
  }
}

export { CreateUserController };
