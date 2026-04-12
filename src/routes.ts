import { Router } from "express";
import patientRoutes from "./modules/patient/patient.routes.js";
const routes = Router();

routes.get("/teste", (request, response) => {
  return response.status(200).json({
    mensagemTeste: "Teste de rota de endpoint",
  });
});

routes.use("/pacientes", patientRoutes);
export default routes;
