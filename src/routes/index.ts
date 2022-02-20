import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";
import { usersRoutes } from "./users.routes";
import { authenticateRouter } from "./authenticate.routes";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const router = Router();

router.use("/categories", ensureAuthenticated, categoriesRoutes);
router.use("/specifications", ensureAuthenticated, specificationsRoutes);
router.use("/users", usersRoutes);
router.use(authenticateRouter);

export { router };
