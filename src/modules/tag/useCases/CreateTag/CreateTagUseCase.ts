import { inject, injectable } from "tsyringe";

import { ApplicationError } from "../../../../shared/appErrors/AplicationError";
import { Tag } from "../../infra/typeorm/entities/Tag";
import { ITagRepository } from "../../repositories/ITagRepository";

interface IRequest {
  name: string;
}

@injectable()
class CreateTagUseCase {
  constructor(
    @inject("TagRepository")
    private tagRepository: ITagRepository
  ) {}
  async execute({ name }: IRequest): Promise<Tag> {
    const nameAlreadyExists = await this.tagRepository.findByName(name);
    if (!name) throw new ApplicationError("Incorrect name");

    if (nameAlreadyExists) throw new ApplicationError("Name Already Exists");

    const tag = await this.tagRepository.create({ name });

    return tag;
  }
}
export { CreateTagUseCase };
