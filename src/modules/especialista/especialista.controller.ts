// toda vez que bater num endpoint ele rebate aqui

import type { Request, Response } from "express";
import EspecialistaService from "./especialista.service.js";

class EspecialistaController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {nome, cpf, dtNasc, especialidade, documentoHabilitacao, telefone, email} = request.body ?? {};
    const specialist = await EspecialistaService.create({
      nome, 
      cpf,
      dtNasc, 
      especialidade, 
      documentoHabilitacao, 
      telefone, 
      email,
    })

    return response.status(201).json(specialist);
  }

  public async find(request: Request, response: Response) {
    const specialist = await EspecialistaService.findAll();
    return response.status(200).json(specialist);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params ?? "";
    const { nome, cpf, dtNasc, especialidade, documentoHabilitacao, telefone, email} = request.body;

    if (!id || typeof id !== "string") {
      return response.status(400).json({
        message: "Id invalido",
      });
    }

    const specialist = await EspecialistaService.update(id, {
      nome, 
      cpf,
      dtNasc, 
      especialidade, 
      documentoHabilitacao, 
      telefone, 
      email,
    });
    return response.json(specialist);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params ?? "";
    if (!id || typeof id !== "string") {
      return response.status(400).json({
        message: "Id invalido",
      });
    }
    const specialist = await EspecialistaService.delete(id);

    return response.json(specialist);
  }
}

export default new EspecialistaController();
