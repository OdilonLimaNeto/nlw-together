import { Router } from "express";

<<<<<<< HEAD
import { tagRoutes } from "./tag.routes";
=======
import { authenticateRoutes } from "./authenticate.routes";
>>>>>>> aplicacoes
import { userRoutes } from "./users.routes";

const router = Router();

router.use("/user", userRoutes);
<<<<<<< HEAD
router.use("/tags", tagRoutes);
=======
router.use(authenticateRoutes);
>>>>>>> aplicacoes

export { router };
