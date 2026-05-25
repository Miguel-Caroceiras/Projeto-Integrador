import { Types } from "mongoose";

export interface IExpert {
  name: string;
  cpf: string;
  dateOfBirth: Date;
  specialty: Types.ObjectId;
  professionalDocument: string;
  phone?: string;
  email?: string;
  createAt?: string;
  updateAt?: string;
}

export interface ICreateExpertDTO {
  name: string;
  cpf: string;
  dateOfBirth: Date;
  specialty: Types.ObjectId;
  professionalDocument: string;
  phone?: string;
  email?: string;
}

export interface IUpdateExpertDTO {
  name: string;
  cpf: string;
  dateOfBirth: Date;
  specialty: Types.ObjectId;
  professionalDocument: string;
  phone?: string;
  email?: string;
}
