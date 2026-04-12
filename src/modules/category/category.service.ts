import Admin from "./category.model";
import type { ICreateAdminDTO } from "./category.types";

class CategoryService {
  public async createAdmin(data: ICreateAdminDTO) {
    const adminExists = await Admin.findOne({ email: data.email });

    if (adminExists) {
      throw new Error("Administrador já cadastrado com esse email");
    }

    const admin = await Admin.create({
      nome: data.nome,
      email: data.email,
      senha: data.senha,
    });

    return admin;
  }
}

export default new CategoryService();