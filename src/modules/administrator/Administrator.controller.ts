import type { Request, Response } from "express";
import administratorService from "./Administrator.service.js";

class AdministratorController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, cpf, dateOfBirth, phone, address } = request.body ?? {};
    const administrator = await administratorService.create({
      name,
      cpf,
      dateOfBirth,
      phone,
      address,
    });
    return response.status(201).json(administrator);
  }

  public async find(request: Request, response: Response) {
    const administrators = await administratorService.find();
    return response.status(200).json(administrators);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params ?? "";
    const { name, cpf, dateOfBirth, phone, address } = request.body;

    if (!id || typeof id !== "string") {
      return response.status(400).json({
        message: "Id invalido",
      });
    }

    const administrator = await administratorService.update(id, {
      name,
      cpf,
      dateOfBirth,
      phone,
      address,
    });
    return response.json(administrator);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params ?? "";

    if (!id || typeof id !== "string") {
      return response.status(400).json({
        message: "Id invalido",
      });
    }

    const administrator = await administratorService.delete(id);
    return response.json(administrator);
  }
}

export default new AdministratorController();