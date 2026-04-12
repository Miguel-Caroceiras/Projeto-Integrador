// toda vez que bater num endpoint ele rebate aqui

import type { Request, Response } from "express";
import specialtyService from "./specialty.service.js";

class SpecialtyController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body ?? {};
    const specialty = await specialtyService.create({
      name,
    });

    return response.status(201).json(specialty);
  }

  public async find(request: Request, response: Response) {
    const specialtys = await specialtyService.find();
    return response.status(200).json(specialtys);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params ?? "";
    const { name } = request.body;

    if (!id || typeof id !== "string") {
      return response.status(400).json({
        message: "Id invalido",
      });
    }
    const specialty = await specialtyService.update(id, {
      name,
    });
    return response.json(specialty);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params ?? "";
    if (!id || typeof id !== "string") {
      return response.status(400).json({
        message: "Id invalido",
      });
    }
    const specialty = await specialtyService.delete(id);

    return response.json(specialty);
  }
}

export default new SpecialtyController();
