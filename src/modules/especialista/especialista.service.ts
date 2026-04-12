import Especialista from "./especialista.model.js";
import type {
  IEspecialista,
  ICreateEspecialistaDTO,
  IUpdateEspecialistaDTO,
} from "./especialista.types.js";

class EspecialistaService {
  public async create(data: ICreateEspecialistaDTO) {
    const specialist = await Especialista.create({
      nome: data.nome,
      cpf: data.cpf,
      dtNasc: data.dtNasc,
      especialidade: data.especialidade,
      documentoHabilitacao: data.documentoHabilitacao,
      telefone: data.telefone ?? "",
      email: data.email ?? "",
    })

    return specialist;
  }

  public async findAll() {
    return await Especialista.find();
  }

  public async findById(id: string) {
    return await Especialista.findById(id);
  }

  public async update(id: string, data: IUpdateEspecialistaDTO) {
    return await Especialista.findByIdAndUpdate(id, data, { new: true });
  }

  public async delete(id: string) {
    return await Especialista.findByIdAndUpdate(id);
  }
}

export default new EspecialistaService();
