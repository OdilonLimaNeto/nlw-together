import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { User } from "../entities/User";



class UsersRepository implements IUsersRepository {
    private repository: Repository<User>

    constructor() {
        this.repository = getRepository(User)
    }

    async create({ name, email, password, isAdmin }: ICreateUserDTO): Promise<User> {
        const user = this.repository.create({ name, email, password, isAdmin });
        await this.repository.save(user);
        return user;
    }

    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne(id);
        return user;
    }


    async findByName(name: string): Promise<User> {
        const user = await this.repository.findOne({
            where: { name }
        });
        return user;
    }
}


export { UsersRepository };