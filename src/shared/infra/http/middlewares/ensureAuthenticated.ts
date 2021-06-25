import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import auth from "../../../../config/auth";
import { UsersRepository } from "../../../../modules/accounts/infra/typeorm/repositories/UsersRepository";
import { ApplicationError } from "../../../appErrors/AplicationError";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const headerAuthenticater = request.headers.authorization;
  const { secret } = auth;
  if (!headerAuthenticater)
    throw new ApplicationError("Token not found...", 401);

  const [, token] = headerAuthenticater.split(" ");

  try {
    const { sub: id } = verify(token, secret) as IPayload;

    const userRepository = new UsersRepository();

    const user = userRepository.findById(id);

    if (!user) throw new ApplicationError("User not found", 401);
    request.user = {
      id,
    };

    next();
  } catch {
    throw new ApplicationError("Invalid token!");
  }
}
