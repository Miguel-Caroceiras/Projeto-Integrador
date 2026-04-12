
import categoryService from "./category.service";

class CategoryController {
  public async create(request, response) {
    try {
      const { nome, email, senha } = request.body ?? {};

      if (!nome || !email || !senha) {
        return response.status(400).json({
          message: "Nome, email e senha são obrigatórios",
        });
      }

      const admin = await categoryService.createAdmin({
        nome,
        email,
        senha,
      });

      return response.status(201).json(admin);
    } catch (error) {
      return response.status(400).json({
        message:
          error instanceof Error
            ? error.message
            : "Erro ao cadastrar administrador",
      });
    }
  }
}

const categoryController = new CategoryController();

export default categoryController;