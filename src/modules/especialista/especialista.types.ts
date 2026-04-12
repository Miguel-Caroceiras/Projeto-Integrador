export interface IEspecialista {
  nome: string;
  cpf: string;
  dtNasc: Date;
  especialidade: string;
  documentoHabilitacao: string;
  telefone?: string;
  email?: string;
  createAt?: string;
  updateAt?: string;
}

export interface ICreateEspecialistaDTO {
  nome: string;
  cpf: string;
  dtNasc: Date;
  especialidade: string;
  documentoHabilitacao: string;
  telefone?: string;
  email?: string;
}

export interface IUpdateEspecialistaDTO {
  nome?: string;
  cpf?: string;
  dtNasc?: Date;
  especialidade: string;
  documentoHabilitacao?: string;
  telefone?: string;
  email?: string;
}
