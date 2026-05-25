/*
    Ele sera responsavel por:
        -Criar Categpria
        -Listar categoria
        -Buscar categoria por id
        atualizar categoria
        excluir categoria
        não receve req e res
        não define rotas
        não sabe nada de HTTP
        
*/

import Specialty from "./specialty.model.js";
import type {
  ISpecialty,
  ICreateSpecialtyDTO,
  IUpdateSpecialtyDTO,
} from "./specialty.types.js";

class SpecialtyService {
  public async create(data: ICreateSpecialtyDTO) {
    const specialty = await Specialty.create({
      name: data.name,
    });

    return specialty;
  }

  public async find() {
    return await Specialty.find();
  }

  public async update(id: string, data: IUpdateSpecialtyDTO) {
    const updatedSpecialty = await Specialty.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    if (!updatedSpecialty) {
      throw new Error("Especialidade não encontrada");
    }

    return updatedSpecialty;
  }

  public async delete(id: string) {
    const deletedSpecialty = Specialty.findByIdAndDelete(id);

    if (!deletedSpecialty) {
      throw new Error("Especialidade não encontrada");
    }

    return deletedSpecialty;
  }
}

export default new SpecialtyService();
