import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import auth from "../../../../config/auth";
import { ApplicationError } from "../../../../shared/appErrors/AplicationError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

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
    const { secret, expires } = auth;
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (!userAlreadyExists)
      throw new ApplicationError("User or password incorrect");

    const comparePassword = await compare(password, userAlreadyExists.password);

    if (!comparePassword)
      throw new ApplicationError("User or password incorrect");

    const token = await sign({}, secret, {
      subject: userAlreadyExists.id,
      expiresIn: expires,
    });

    const tokenReturn: IResponse = {
      user: {
        name: userAlreadyExists.name,
        email: userAlreadyExists.email,
      },
      token,
    };
    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
