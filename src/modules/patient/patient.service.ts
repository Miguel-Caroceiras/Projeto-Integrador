import {
  IPatientRepository,
  ICreatePatientDTO,
  IUpdatePatientDTO,
} from "./patient.types.js";

export class PatientService {
  constructor(private patientRepository: IPatientRepository) {}

  public async create(data: ICreatePatientDTO) {
    // Aqui você poderia adicionar lógicas, como verificar se o CPF já existe
    return await this.patientRepository.create(data);
  }

  public async findAll(name?: string) {
    return await this.patientRepository.findAll(name);
  }

  public async findById(id: string) {
    const patient = await this.patientRepository.findById(id);
    if (!patient) throw new Error("Paciente não encontrado");
    return patient;
  }

  public async update(id: string, data: IUpdatePatientDTO) {
    const updatedPatient = await this.patientRepository.update(id, data);
    if (!updatedPatient)
      throw new Error("Paciente não encontrado para atualização");
    return updatedPatient;
  }

  public async delete(id: string) {
    const deletedPatient = await this.patientRepository.delete(id);
    if (!deletedPatient)
      throw new Error("Paciente não encontrado para exclusão");
    return deletedPatient;
  }
}