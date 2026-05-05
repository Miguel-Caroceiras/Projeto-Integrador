// toda vez que bater num endpoint ele rebate aqui

import type { Request, Response } from "express";
import ExpertService from "./expert.service.js";

class ExpertController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      cpf,
      dateOfBirth,
      specialty,
      professionalDocument,
      phone,
      email,
    } = request.body ?? {};
    const expert = await ExpertService.create({
      name,
      cpf,
      dateOfBirth,
      specialty,
      professionalDocument,
      phone,
      email,
    });

    return response.status(201).json(expert);
  }

  public async find(request: Request, response: Response) {
    const expert = await ExpertService.findAll();
    return response.status(200).json(expert);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params ?? "";
    const {
      name,
      cpf,
      dateOfBirth,
      specialty,
      professionalDocument,
      phone,
      email,
    } = request.body;

    if (!id || typeof id !== "string") {
      return response.status(400).json({
        message: "Id invalido",
      });
    }

    const expert = await ExpertService.update(id, {
      name,
      cpf,
      dateOfBirth,
      specialty,
      professionalDocument,
      phone,
      email,
    });
    return response.json(expert);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params ?? "";
    if (!id || typeof id !== "string") {
      return response.status(400).json({
        message: "Id invalido",
      });
    }
    const expert = await ExpertService.delete(id);

    return response.json(expert);
  }
}

export default new ExpertController();
