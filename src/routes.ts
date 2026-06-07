import { Router } from "express";

import patientRoutes from "./modules/patient/patient.routes.js";
import expertRoutes from "./modules/expert/expert.routes.js";
import specialtyRoutes from "./modules/specialty/specialty.routes.js";
import schedulingRoutes from "./modules/scheduling/scheduling.routes.js";

const routes = Router();

routes.get("/teste", (request, response) => {
  return response.status(200).json({
    mensagemTeste: "Teste de rota de endpoint",
  });
});

routes.use("/pacientes", patientRoutes);

routes.use("/especialistas", expertRoutes);

routes.use("/especialidades", specialtyRoutes);

routes.use("/agendamentos", schedulingRoutes);


export default routes;
