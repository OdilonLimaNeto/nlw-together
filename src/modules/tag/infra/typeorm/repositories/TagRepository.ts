import { getRepository, Repository } from "typeorm";

import { ICreateTagDTO } from "../../../dtos/ICreateTagDTO";
import { ITagRepository } from "../../../repositories/ITagRepository";
import { Tag } from "../entities/Tag";

class TagRepository implements ITagRepository {
  private repository: Repository<Tag>;

  constructor() {
    this.repository = getRepository(Tag);
  }

  async create({ name }: ICreateTagDTO): Promise<Tag> {
    const tag = await this.repository.create({ name });

    await this.repository.save(tag);

    return tag;
  }

  findByName(name: string): Promise<Tag> {
    const tag = this.repository.findOne({
      where: { name },
    });
    return tag;
  }
}

export { TagRepository };
