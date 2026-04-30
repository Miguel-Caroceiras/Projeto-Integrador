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

import schedulingController from "./scheduling.controller.js";
import Scheduling from "./scheduling.model.js";
import type {
  IScheduling,
  ICreateSchedulingDTO,
  IUpdateSchedulingDTO,
} from "./scheduling.types.js";

class SchedulingService {
  public async create(data: ICreateSchedulingDTO) {
    const scheduling = await Scheduling.create({
      dateScheduling: data.dateScheduling,
      status: data.status,
      expertId: data.expertId,
      patientId: data.patientId,
    });

    return scheduling;
  }

  public async find() {
    return await Scheduling.find().populate("Patient").populate("Especialista");
  }

  public async update(id: string, data: IUpdateSchedulingDTO) {
    const updatedScheduling = await Scheduling.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    if (!updatedScheduling) {
      throw new Error("Paciente não encontrado");
    }

    return updatedScheduling;
  }

  public async delete(id: string) {
    const deletedScheduling = Scheduling.findByIdAndDelete(id);

    if (!deletedScheduling) {
      throw new Error("Paciente não encontrado");
    }

    return deletedScheduling;
  }
}

export default new SchedulingService();
