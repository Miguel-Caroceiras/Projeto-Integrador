import ExpertModel from "./expert.model.js";
import {
  IExpertRepository,
  ICreateExpertDTO,
  IUpdateExpertDTO,
  IExpert,
} from "./expert.types.js";

export class ExpertRepository implements IExpertRepository {
  public async create(data: ICreateExpertDTO): Promise<IExpert> {
    const expert = await ExpertModel.create(data);
    return expert.toObject(); 
  }

  public async findAll(): Promise<IExpert[]> {
    return await ExpertModel.find().populate("specialty").lean();
  }

  public async findById(id: string): Promise<IExpert | null> {
    return await ExpertModel.findById(id).lean();
  }

  public async update(
    id: string,
    data: IUpdateExpertDTO,
  ): Promise<IExpert | null> {
    return await ExpertModel.findByIdAndUpdate(id, data, { new: true }).lean();
  }

  public async delete(id: string): Promise<IExpert | null> {
    return await ExpertModel.findByIdAndDelete(id).lean();
  }
}
