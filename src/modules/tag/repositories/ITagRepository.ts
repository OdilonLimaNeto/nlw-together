import { ICreateTagDTO } from "../dtos/ICreateTagDTO";
import { Tag } from "../infra/typeorm/entities/Tag";

interface ITagRepository {
  create({ name }: ICreateTagDTO): Promise<Tag>;
  findByName(name: string): Promise<Tag>;
}

export { ITagRepository };
