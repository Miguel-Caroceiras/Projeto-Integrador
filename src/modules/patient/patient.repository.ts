import PatientModel from "./patient.model.js";
import {
  IPatientRepository,
  ICreatePatientDTO,
  IUpdatePatientDTO,
  IPatient,
} from "./patient.types.js";

export class PatientRepository implements IPatientRepository {
  public async create(data: ICreatePatientDTO): Promise<IPatient> {
    const patient = await PatientModel.create(data);
    return patient.toObject();
  }

  public async findAll(name?: string): Promise<IPatient[]> {
    const filter = name ? { name: { $regex: name, $options: "i" } } : {};
    return await PatientModel.find(filter).lean();
  }

  public async findById(id: string): Promise<IPatient | null> {
    return await PatientModel.findById(id).lean();
  }

  public async update(
    id: string,
    data: IUpdatePatientDTO,
  ): Promise<IPatient | null> {
    return await PatientModel.findByIdAndUpdate(id, data, { new: true }).lean();
  }

  public async delete(id: string): Promise<IPatient | null> {
    return await PatientModel.findByIdAndDelete(id).lean();
  }
}
