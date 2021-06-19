import { Router } from "express";

import CategoryController from "@modules/category/infra/http/controllers/CategoryController";

const categoryRouter = Router();

categoryRouter.post("/", CategoryController.create);
categoryRouter.get("/", CategoryController.index);

export default categoryRouter;
