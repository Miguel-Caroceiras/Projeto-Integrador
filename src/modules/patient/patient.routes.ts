import { Router } from "express";

import patientController from "./patient.controller.js";

const patientRoutes = Router();

patientRoutes.get("/", patientController.find);
patientRoutes.post("/", patientController.create);
patientRoutes.put("/:id", patientController.update);
patientRoutes.delete("/:id", patientController.delete);

export default patientRoutes;
