export interface IPatient {
  name: string;
  cpf: string;
  dateOfBirth: Date;
  email: string;
  phone: string;
  sex: string;
  status?: string;
  address?: {
    cep?: string;
    street?: string;
    complement?: string;
    number?: string;
    city?: string;
    state?: string;
  };
}

export interface ICreatePatientDTO {
  name: string;
  cpf: string;
  dateOfBirth: Date;
  email: string;
  phone: string;
  sex: string;
  status?: string;
  address: {
    cep?: string;
    street?: string;
    complement?: string;
    number?: string;
    city?: string;
    state?: string;
  };
}

export interface IUpdatePatientDTO {
  name?: string;
  cpf?: string;
  dateOfBirth?: Date;
  email?: string;
  phone?: string;
  sex?: string;
  status?: string;
  address?: {
    cep?: string;
    street?: string;
    complement?: string;
    number?: string;
    city?: string;
    state?: string;
  };
}
