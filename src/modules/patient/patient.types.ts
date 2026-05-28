export interface IPatient {
  name: string;
  cpf: string;
  dateOfBirth: Date;
  email: string;
  phone: string;
  address: string;
  status: string;
  sex: string;
  createAt?: string;
  updateAt?: string;
}

export interface ICreatePatientDTO {
  name: string;
  cpf: string;
  dateOfBirth: Date;
  email: string;
  phone: string;
  address: string;
  status: string;
  sex: string;
}

export interface IUpdatePatientDTO {
  name?: string;
  cpf?: string;
  dateOfBirth?: Date;
  email?: string;
  phone?: string;
  address?: string;
  status?: string;
  sex?: string;
}
