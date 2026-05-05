import { Types } from "mongoose";

export interface IScheduling {
  dateScheduling: Date;
  status: string;
  patient: Types.ObjectId;
  expert: Types.ObjectId;
}

export interface ICreateSchedulingDTO {
  dateScheduling: Date;
  status: string;
  patient: Types.ObjectId;
  expert: Types.ObjectId;
}

export interface IUpdateSchedulingDTO {
  dateScheduling?: Date;
  status?: string;
  patient?: Types.ObjectId;
  expert?: Types.ObjectId;
}
