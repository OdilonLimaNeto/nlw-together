import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { tagRoutes } from "./tag.routes";
import { userRoutes } from "./users.routes";

const router = Router();

router.use("/user", userRoutes);
router.use("/tags", tagRoutes);
router.use(authenticateRoutes);

export { router };
