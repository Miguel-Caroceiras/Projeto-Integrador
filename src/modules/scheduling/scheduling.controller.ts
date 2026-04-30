// toda vez que bater num endpoint ele rebate aqui

import type { Request, Response } from "express";
import schedulingService from "./scheduling.service.js";

class SchedulingController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { dateScheduling, status, patientId, expertId } = request.body ?? {};
    const scheduling = await schedulingService.create({
      dateScheduling,
      status,
      expertId,
      patientId
    });

    return response.status(201).json(scheduling);
  }

  public async find(request: Request, response: Response) {
    const schedulings = await schedulingService.find();
    return response.status(200).json(schedulings);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params ?? "";
    const { dateScheduling, status, patientId, expertId } = request.body ?? {};

    if (!id || typeof id !== "string") {
      return response.status(400).json({
        message: "Id invalido",
      });
    }
    const scheduling = await schedulingService.update(id, {
      dateScheduling,
      status,
      expertId,
      patientId
    });
    return response.json(scheduling);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params ?? "";
    if (!id || typeof id !== "string") {
      return response.status(400).json({
        message: "Id invalido",
      });
    }
    const scheduling = await schedulingService.delete(id);

    return response.json(scheduling);
  }
}

export default new SchedulingController();
