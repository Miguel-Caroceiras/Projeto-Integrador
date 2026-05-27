// toda vez que bater num endpoint ele rebate aqui

import type { Request, Response } from "express";
import patientService from "./patient.service.js";

class PatientController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, cpf, dateOfBirth, email, phone, status, sex } = request.body ?? {};
    const patient = await patientService.create({
      name,
      cpf,
      dateOfBirth,
      email,
      phone,
      status,
      sex,
    });

    return response.status(201).json(patient);
  }

  public async find(request: Request, response: Response) {
    const patients = await patientService.find();
    return response.status(200).json(patients);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params ?? "";
    const { name, cpf, dateOfBirth, email, phone, status, sex } = request.body;

    if (!id || typeof id !== "string") {
      return response.status(400).json({
        message: "Id invalido",
      });
    }
    const patient = await patientService.update(id, {
      name,
      cpf,
      dateOfBirth,
      email,
      phone,
      status,
      sex
    });
    return response.json(patient);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params ?? "";
    if (!id || typeof id !== "string") {
      return response.status(400).json({
        message: "Id invalido",
      });
    }
    const patient = await patientService.delete(id);

    return response.json(patient);
  }
}

export default new PatientController();
