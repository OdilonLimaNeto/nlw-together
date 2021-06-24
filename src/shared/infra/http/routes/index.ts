import { Router } from "express";

import { tagRoutes } from "./tag.routes";
import { userRoutes } from "./users.routes";

const router = Router();

router.use("/user", userRoutes);
router.use("/tags", tagRoutes);

export { router };
