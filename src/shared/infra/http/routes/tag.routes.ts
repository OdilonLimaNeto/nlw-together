import { Router } from "express";

import { CreateTagController } from "../../../../modules/tag/useCases/CreateTag/CreateTagController";

const tagRoutes = Router();

const createTagController = new CreateTagController();

tagRoutes.post("/", createTagController.handle);

export { tagRoutes };
