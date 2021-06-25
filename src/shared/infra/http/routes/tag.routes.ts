import { Router } from "express";

import { CreateTagController } from "../../../../modules/tag/useCases/CreateTag/CreateTagController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const tagRoutes = Router();

const createTagController = new CreateTagController();

tagRoutes.use(ensureAuthenticated);
tagRoutes.post("/", ensureAdmin, createTagController.handle);

export { tagRoutes };
