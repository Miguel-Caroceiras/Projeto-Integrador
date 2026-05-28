import { Router } from "express";

import administratorController from "./Administrator.controller.js";

const administratorRoutes = Router();

administratorRoutes.get("/", administratorController.find);
administratorRoutes.post("/", administratorController.create);
administratorRoutes.put("/:id", administratorController.update);
administratorRoutes.delete("/:id", administratorController.delete);

export default administratorRoutes;