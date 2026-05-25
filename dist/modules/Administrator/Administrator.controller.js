"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Administrator_service_js_1 = __importDefault(require("./Administrator.service.js"));
class AdministratorController {
    async create(request, response) {
        const { name, cpf, dateOfBirth, phone, address } = request.body ?? {};
        const administrator = await Administrator_service_js_1.default.create({
            name,
            cpf,
            dateOfBirth,
            phone,
            address,
        });
        return response.status(201).json(administrator);
    }
    async find(request, response) {
        const administrators = await Administrator_service_js_1.default.find();
        return response.status(200).json(administrators);
    }
    async update(request, response) {
        const { id } = request.params ?? "";
        const { name, cpf, dateOfBirth, phone, address } = request.body;
        if (!id || typeof id !== "string") {
            return response.status(400).json({
                message: "Id invalido",
            });
        }
        const administrator = await Administrator_service_js_1.default.update(id, {
            name,
            cpf,
            dateOfBirth,
            phone,
            address,
        });
        return response.json(administrator);
    }
    async delete(request, response) {
        const { id } = request.params ?? "";
        if (!id || typeof id !== "string") {
            return response.status(400).json({
                message: "Id invalido",
            });
        }
        const administrator = await Administrator_service_js_1.default.delete(id);
        return response.json(administrator);
    }
}
exports.default = new AdministratorController();
//# sourceMappingURL=Administrator.controller.js.map