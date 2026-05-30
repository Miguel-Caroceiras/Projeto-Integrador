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

import Patient from "./patient.model.js";
import type {
  IPatient,
  ICreatePatientDTO,
  IUpdatePatientDTO,
} from "./patient.types.js";

class PatientService {
  public async create(data: ICreatePatientDTO) {
    if (data.sex !== "M" && data.sex !== "F" && data.sex !== "O") {
      console.log("erro no sexo");
      return;
    }
    
    const patient = await Patient.create({
      name: data.name,
      cpf: data.cpf ?? "",
      dateOfBirth: data.dateOfBirth,
      email: data.email,
      phone: data.phone,
      address: data.address,
      status: data.status ?? "A",
      sex: data.sex,
    });

    return patient;
  }

  public async find() {
    return await Patient.find();
  }

  public async update(id: string, data: IUpdatePatientDTO) {
    const updatedPatient = await Patient.findByIdAndUpdate(id, data, {
      new: true,
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
  
  public validateCpf(cpf: string){
    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11) return false;

    if (/^(\d)\1+$/.test(cpf)) return false;

    let soma = 0;

    for (let i = 0; i < 9; i++)
        soma += parseInt(cpf.charAt(i)) * (10 - i);

    let resto = (soma * 10) % 11;

    if (resto === 10) resto = 0;

    if (resto !== parseInt(cpf.charAt(9)))
        return false;

    soma = 0;

    for (let i = 0; i < 10; i++)
        soma += parseInt(cpf.charAt(i)) * (11 - i);

    resto = (soma * 10) % 11;

    if (resto === 10) resto = 0;

    return resto === parseInt(cpf.charAt(10));
  }
}

export default new PatientService();
