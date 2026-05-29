import Administrator from "./administrator.model.js";
import type {
  ICreateAdministratorDTO,
  IUpdateAdministratorDTO,
} from "./administrator.types.js";

class AdministratorService {
  public async create(data: ICreateAdministratorDTO) {
    const administrator = await Administrator.create({
      name: data.name,
      cpf: data.cpf ?? "",
      dateOfBirth: data.dateOfBirth,
      phone: data.phone,
      email: data.email,
      address: data.address,
    });
    return administrator;
  }

  public async find() {
    return await Administrator.find();
  }

  public async update(id: string, data: IUpdateAdministratorDTO) {
    const updatedAdministrator = await Administrator.findByIdAndUpdate(id, data,
      {
        new: true,
        runValidators: true,
      },
    );
    if (!updatedAdministrator) {
      throw new Error("Administrador não encontrado");
    }

    return updatedAdministrator;
  }

  public async delete(id: string) {
    const deletedAdministrator = Administrator.findByIdAndDelete(id);
    if (!deletedAdministrator) {
      throw new Error("Administrador não encontrado");
    }
    return deletedAdministrator;
  }
}

export default new AdministratorService();