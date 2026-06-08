import SpecialtyModel from "./specialty.model.js";
import {
  ISpecialtyRepository,
  ICreateSpecialtyDTO,
  IUpdateSpecialtyDTO,
  ISpecialty,
} from "./specialty.types.js";

export class SpecialtyRepository implements ISpecialtyRepository {
  public async create(data: ICreateSpecialtyDTO): Promise<ISpecialty> {
    const specialty = await SpecialtyModel.create(data);
    return specialty.toObject();
  }

  public async findAll(): Promise<ISpecialty[]> {
    return await SpecialtyModel.find().lean();
  }

  public async findById(id: string): Promise<ISpecialty | null> {
    return await SpecialtyModel.findById(id).lean();
  }

  public async update(
    id: string,
    data: IUpdateSpecialtyDTO,
  ): Promise<ISpecialty | null> {
    return await SpecialtyModel.findByIdAndUpdate(id, data, {
      new: true,
    }).lean();
  }

  public async delete(id: string): Promise<ISpecialty | null> {
    return await SpecialtyModel.findByIdAndDelete(id).lean();
  }
}
