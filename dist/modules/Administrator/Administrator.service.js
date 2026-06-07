"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Administrator_model_js_1 = __importDefault(require("./Administrator.model.js"));
class AdministratorService {
    async create(data) {
        const administrator = await Administrator_model_js_1.default.create({
            name: data.name,
            cpf: data.cpf ?? "",
            dateOfBirth: data.dateOfBirth,
            phone: data.phone,
            address: data.address,
        });
        return administrator;
    }
    async find() {
        return await Administrator_model_js_1.default.find();
    }
    async update(id, data) {
        const updatedAdministrator = await Administrator_model_js_1.default.findByIdAndUpdate(id, data, {
            
            runValidators: true,
        });
        if (!updatedAdministrator) {
            throw new Error("Administrador não encontrado");
        }
        return updatedAdministrator;
    }
    async delete(id) {
        const deletedAdministrator = Administrator_model_js_1.default.findByIdAndDelete(id);
        if (!deletedAdministrator) {
            throw new Error("Administrador não encontrado");
        }
        return deletedAdministrator;
    }
}
exports.default = new AdministratorService();
//# sourceMappingURL=Administrator.service.js.map