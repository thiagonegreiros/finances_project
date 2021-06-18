import "reflect-metadata";

import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";

import AppError from "@shared/errors/AppError";
import routes from "@shared/infra/http/routes";
import "../typeorm";

dotenv.config();

const app = express();
const port = process.env.API_PORT || 3001;

app.use(express.json());
app.use(routes);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res
      .status(err.statusCode)
      .json({ status: "error", message: err.message });
  }

  console.log(err);

  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(port, () => {
  console.log("🏃 Running Server on ", process.env.API_PORT);
});
