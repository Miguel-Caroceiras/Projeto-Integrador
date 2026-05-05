import { Router } from "express";

import expertController from "./expert.controller.js";


const expertRoutes = Router();

expertRoutes.get("/", expertController.find);
expertRoutes.post("/", expertController.create);
expertRoutes.put("/:id", expertController.update);
expertRoutes.delete("/:id", expertController.delete);

export default expertRoutes;
