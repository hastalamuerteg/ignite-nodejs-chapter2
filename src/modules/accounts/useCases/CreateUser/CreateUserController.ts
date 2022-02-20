import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, password, email, driver_license, avatar } = req.body;
    const createUserUseCase = container.resolve(CreateUserUseCase);
    await createUserUseCase.execute({
      name,
      password,
      email,
      driver_license,
      avatar,
    });

    return res.status(201).send();
  }
}

export { CreateUserController };
