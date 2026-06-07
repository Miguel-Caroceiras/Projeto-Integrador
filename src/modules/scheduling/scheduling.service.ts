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
    if (data.dateScheduling < new Date()) {
      return "Não é possível agendar uma consulta a um dia anterior";
    }
    const scheduling = await Scheduling.create({
      dateScheduling: data.dateScheduling,
      status: data.status,
      expert: data.expert,
      patient: data.patient,
    });

    return scheduling;
  }

  public async find() {
    return await Scheduling.find().populate("patient").populate("expert");
  }

  public async update(id: string, data: IUpdateSchedulingDTO) {
    const updatedScheduling = await Scheduling.findByIdAndUpdate(id, data, {
      returnDocument: "after",
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
