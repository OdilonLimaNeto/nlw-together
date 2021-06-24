import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { TagRepository } from "../../modules/tag/infra/typeorm/repositories/TagRepository";
import { ITagRepository } from "../../modules/tag/repositories/ITagRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<ITagRepository>("TagRepository", TagRepository);
