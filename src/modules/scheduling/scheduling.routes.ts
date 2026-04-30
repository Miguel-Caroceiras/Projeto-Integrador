import { Router } from "express";

import patientController from "./scheduling.controller.js";
import schedulingController from "./scheduling.controller.js";

const schedulingRoutes = Router();

schedulingRoutes.get("/", schedulingController.find);
schedulingRoutes.post("/", schedulingController.create);
schedulingRoutes.put("/:id", schedulingController.update);
schedulingRoutes.delete("/:id", schedulingController.delete);

export default schedulingRoutes;
