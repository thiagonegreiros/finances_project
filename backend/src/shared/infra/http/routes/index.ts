import { Router } from "express";

import categoryRouter from "@modules/category/infra/http/routes/categories.router";

const routes = Router();

routes.use("/categories", categoryRouter);

routes.use("/", (req, res) => {
  res.send({ message: "Api finances - Thiago Negreiros" });
});

export default routes;
