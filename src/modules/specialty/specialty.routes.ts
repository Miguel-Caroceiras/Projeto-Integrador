import { Router } from "express";

import specialtyController from "./specialty.controller.js";

const specialtyRoutes = Router();

specialtyRoutes.get("/", specialtyController.find);
specialtyRoutes.post("/", specialtyController.create);
specialtyRoutes.put("/:id", specialtyController.update);
specialtyRoutes.delete("/:id", specialtyController.delete);

export default specialtyRoutes;
