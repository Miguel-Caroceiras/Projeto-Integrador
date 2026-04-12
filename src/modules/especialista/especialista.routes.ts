import { Router } from "express";

import especialistaController from "./especialista.controller.js";


const especialistaRoutes = Router();

especialistaRoutes.get("/", especialistaController.find);
especialistaRoutes.post("/", especialistaController.create);
especialistaRoutes.put("/:id", especialistaController.update);
especialistaRoutes.delete("/:id", especialistaController.delete);

export default especialistaRoutes;
