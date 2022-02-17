import { container } from "tsyringe";
import { ICategoriesRepository } from "../../modules";
import { CategoriesRepository } from "../../modules";
import { ISpecificationsRepository } from "../../modules";
import { SpecificationsRepository } from "../../modules";
import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
