import Administrator from "./Administrator.model";
import type {
  ICreateAdministratorDTO,
  IUpdateAdministratorDTO,
} from "./Administrator.types.js";

class AdministratorService {
  public async create(data: ICreateAdministratorDTO) {
    const administrator = await Administrator.create({
      name: data.name,
      cpf: data.cpf ?? "",
      dateOfBirth: data.dateOfBirth,
      phone: data.phone,
      address: data.address,
    });
    return administrator;
  }

  public async find() {
    return await Administrator.find();
  }

  public async update(id: string, data: IUpdateAdministratorDTO) {
    const updatedAdministrator = await Administrator.findByIdAndUpdate(
      id,
      data,
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