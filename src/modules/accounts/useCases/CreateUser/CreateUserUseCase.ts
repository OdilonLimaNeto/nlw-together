import { inject, injectable } from "tsyringe";
import { ApplicationError } from "../../../../shared/appErrors/AplicationError";
import { User } from "../../infra/typeorm/entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
}

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}
    async execute({ name, email, password, isAdmin }: IRequest): Promise<User> {
        const emailAlreadyExists = await this.usersRepository.findByEmail(email);

        if(emailAlreadyExists) throw new ApplicationError("Email already exists");

        const user = await this.usersRepository.create({ name, email, password, isAdmin });
        return user;
    }
}

export { CreateUserUseCase };