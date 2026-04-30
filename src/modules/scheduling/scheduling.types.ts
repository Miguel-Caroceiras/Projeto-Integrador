import { Types } from "mongoose";

export interface IScheduling {
  dateScheduling: Date;
  status: string;
  patientId: Types.ObjectId;
  expertId: Types.ObjectId;
}

export interface ICreateSchedulingDTO {
  dateScheduling: Date;
  status: string;
  patientId: Types.ObjectId;
  expertId: Types.ObjectId;
}

export interface IUpdateSchedulingDTO {
  dateScheduling?: Date;
  status?: string;
  patientId?: Types.ObjectId;
  expertId?: Types.ObjectId;
}
