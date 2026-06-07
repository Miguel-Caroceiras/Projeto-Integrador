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

import { after } from "node:test";
import Patient from "./patient.model.js";
import type {
  IPatient,
  ICreatePatientDTO,
  IUpdatePatientDTO,
} from "./patient.types.js";

class PatientService {
  public async create(data: ICreatePatientDTO) {
    if (data.sex !== "M" && data.sex !== "F") {
      console.log("erro no sexo");
      return;
    }
    const patient = await Patient.create({
      name: data.name,
      cpf: data.cpf,
      dateOfBirth: new Date(data.dateOfBirth),
      email: data.email,
      phone: data.phone,
      status: data.status ?? "A",
      sex: data.sex,
      address: data?.address,
    });

    return patient;
  }

  public async find() {
    return await Patient.find();
  }

  public async update(id: string, data: IUpdatePatientDTO) {
    const updatedPatient = await Patient.findByIdAndUpdate(id, data, {
      returnDocument: "after",
      runValidators: true,
    });

    if (!updatedPatient) {
      throw new Error("Paciente não encontrado");
    }

    return updatedPatient;
  }

  public async delete(id: string) {
    const deletedPatient = Patient.findByIdAndDelete(id);

    if (!deletedPatient) {
      throw new Error("Paciente não encontrado");
    }

    return deletedPatient;
  }
}

export default new PatientService();
