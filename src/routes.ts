import express from "express";
import categoryRoutes from "./modules/category/category.routes";

const routes = express.Router();

routes.get("/teste", (request, response) => {
  return response.status(200).json({
    mensagemTeste: "Teste de rota de endpoint",
  });
});

routes.use("/category", categoryRoutes);

export default routes;