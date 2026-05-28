export interface IAdministrator {
  name: string;
  cpf: string;
  dateOfBirth: Date;
  email: string;
  phone: string;
  address: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ICreateAdministratorDTO {
  name: string;
  cpf: string;
  dateOfBirth: Date;
  phone: string;
  email: string;
  address: string;
}

export interface IUpdateAdministratorDTO {
  name?: string;
  cpf?: string;
  dateOfBirth?: Date;
  phone?: string;
  email?: string;
  address?: string;
}