export interface ISpecialty {
  name: string;
  createAt?: string;
  updateAt?: string;
}

export interface ICreateSpecialtyDTO {
  name: string;
}

export interface IUpdateSpecialtyDTO {
  name?: string;
}
