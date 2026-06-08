import SchedulingModel from "./scheduling.model.js";
import {
  ISchedulingRepository,
  ICreateSchedulingDTO,
  IUpdateSchedulingDTO,
  IScheduling,
} from "./scheduling.types.js";

export class SchedulingRepository implements ISchedulingRepository {
  public async create(data: ICreateSchedulingDTO): Promise<IScheduling> {
    const scheduling = await SchedulingModel.create(data);
    return scheduling.toObject();
  }

  public async find(): Promise<IScheduling[]> {
    return await SchedulingModel.find()
      .populate("patient")
      .populate("expert")
      .lean();
  }

  public async findById(id: string): Promise<IScheduling | null> {
    return await SchedulingModel.findById(id).lean();
  }

  public async update(
    id: string,
    data: IUpdateSchedulingDTO
  ): Promise<IScheduling | null> {
    return await SchedulingModel.findByIdAndUpdate(id, data, { new: true }).lean();
  }

  public async delete(id: string): Promise<IScheduling | null> {
    return await SchedulingModel.findByIdAndDelete(id).lean();
  }
}