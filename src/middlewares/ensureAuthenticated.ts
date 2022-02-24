import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
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
    throw new AppError("Token missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: userId } = verify(
      token,
      "23f9a7e5cf527555115b58c40b725fff"
    ) as IPayload;

    const usersRepository = new UsersRepository();
    const user = usersRepository.findById(userId);

    if (!user) throw new AppError("User does not exists");

    req.user = {
      id: userId,
    };

    next();
  } catch {
    throw new AppError("Invalid token", 401);
  }
}
