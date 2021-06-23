import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../infra/typeorm/entities/User";


interface IUsersRepository {
    create({ name, email, password, isAdmin }: ICreateUserDTO): Promise<User>;
    findById(id: string): Promise<User>
    findByName(name: string): Promise<User>
}

export { IUsersRepository }