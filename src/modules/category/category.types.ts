export interface IAdmin {
  nome: string;
  email: string;
  senha: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICreateAdminDTO {
  nome: string;
  email: string;
  senha: string;
}