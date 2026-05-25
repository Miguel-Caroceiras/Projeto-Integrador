"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const patient_routes_js_1 = __importDefault(require("./modules/patient/patient.routes.js"));
const expert_routes_js_1 = __importDefault(require("./modules/expert/expert.routes.js"));
const specialty_routes_js_1 = __importDefault(require("./modules/specialty/specialty.routes.js"));
const scheduling_routes_js_1 = __importDefault(require("./modules/scheduling/scheduling.routes.js"));
const Administrator_routes_js_1 = __importDefault(require("./modules/Administrator/Administrator.routes.js"));
const routes = (0, express_1.Router)();
routes.get("/teste", (request, response) => {
    return response.status(200).json({
        mensagemTeste: "Teste de rota de endpoint",
    });
});
routes.use("/pacientes", patient_routes_js_1.default);
routes.use("/especialistas", expert_routes_js_1.default);
routes.use("/especialidades", specialty_routes_js_1.default);
routes.use("/agendamentos", scheduling_routes_js_1.default);
routes.use("/administradores", Administrator_routes_js_1.default);
exports.default = routes;
//# sourceMappingURL=routes.js.map