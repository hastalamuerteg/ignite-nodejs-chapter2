import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new Error("Token missing");
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(
      token,
      "23f9a7e5cf527555115b58c40b725fff"
    ) as IPayload;

    const usersRepository = new UsersRepository();
    const user = usersRepository.findById(sub);

    if (!user) throw new Error("User does not exists");

    next();
  } catch {
    throw new Error("Invalid token");
  }
}
