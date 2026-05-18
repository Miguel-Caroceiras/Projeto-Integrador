import { Router } from "express";
// import patientRoutes from "./modules/patient/patient.routes";
// import expertRoutes from "./modules/expert/expert.routes";
// import specialtyRoutes from "./modules/specialty/specialty.routes";
// import schedulingRoutes from "./modules/scheduling/scheduling.routes";
import administratorRoutes from "./modules/administrator/Administrator.routes";

const routes = Router();

routes.get("/teste", (request, response) => {
  return response.status(200).json({
    mensagemTeste: "Teste de rota de endpoint",
  });
});

// routes.use("/pacientes", patientRoutes);
// routes.use("/especialistas", expertRoutes);
// routes.use("/especialidades", specialtyRoutes);
// routes.use("/agendamentos", schedulingRoutes);
routes.use("/administradores", administratorRoutes);

export default routes;