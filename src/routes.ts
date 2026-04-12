import { Router } from "express";
import patientRoutes from "./modules/patient/patient.routes.js";
import especialistaRoutes from "./modules/especialista/especialista.routes.js";
import specialtyRoutes from "./modules/specialty/specialty.routes.js";
const routes = Router();

routes.get("/teste", (request, response) => {
  return response.status(200).json({
    mensagemTeste: "Teste de rota de endpoint",
  });
});

routes.use("/pacientes", patientRoutes);

routes.use("/especialistas", especialistaRoutes);

routes.use("/especialidades", specialtyRoutes);

export default routes;
