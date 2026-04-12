export interface IPatient {
  name: string;
  cpf: string;
  dateOfBirth: Date;
  email: string;
  phone: string;
  createAt?: string;
  updateAt?: string;
}

export interface ICreatePatientDTO {
  name: string;
  cpf: string;
  dateOfBirth: Date;
  email: string;
  phone: string;
}

export interface IUpdatePatientDTO {
  name?: string;
  cpf?: string;
  dateOfBirth?: Date;
  email?: string;
  phone?: string;
}
