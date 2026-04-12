import express from "express";
import categoryController from "./category.controller";

const categoryRoutes = express.Router();

categoryRoutes.post("/admin/cadastro", (request, response) => {
  return categoryController.create(request, response);
});

export default categoryRoutes;