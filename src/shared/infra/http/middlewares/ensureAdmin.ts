import { Request, Response, NextFunction } from "express";

import { UsersRepository } from "../../../../modules/accounts/infra/typeorm/repositories/UsersRepository";
import { ApplicationError } from "../../../appErrors/AplicationError";

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const usersRepository = new UsersRepository();
  const { id } = request.user;

  const userAlreadyExists = await usersRepository.findById(id);

  if (!userAlreadyExists) throw new ApplicationError("User not found");

  if (userAlreadyExists.isAdmin) return next();

  throw new ApplicationError("User not authorized");
}
