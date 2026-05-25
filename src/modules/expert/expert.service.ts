import Expert from "./expert.model.js";
import type {
  IExpert,
  ICreateExpertDTO,
  IUpdateExpertDTO,
} from "./expert.types.js";

class ExpertService {
  public async create(data: ICreateExpertDTO) {
    const expert = await Expert.create({
      name: data.name,
      cpf: data.cpf,
      dateOfBirth: data.dateOfBirth,
      specialty: data.specialty,
      professionalDocument: data.professionalDocument,
      phone: data.phone ?? "",
      email: data.email ?? "",
    });

    return expert;
  }

  public async findAll() {
    return await Expert.find().populate("specialty");
  }

  public async findById(id: string) {
    return await Expert.findById(id);
  }

  public async update(id: string, data: IUpdateExpertDTO) {
    return await Expert.findByIdAndUpdate(id, data, { new: true });
  }

  public async delete(id: string) {
    const deletedExpert = Expert.findByIdAndDelete(id);

    if (!deletedExpert) {
      throw new Error("Especialista não encontrado");
    }

    return deletedExpert;
  }
}

export default new ExpertService();
