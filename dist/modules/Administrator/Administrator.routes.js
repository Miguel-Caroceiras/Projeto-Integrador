"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Administrator_controller_js_1 = __importDefault(require("./Administrator.controller.js"));
const administratorRoutes = (0, express_1.Router)();
administratorRoutes.get("/", Administrator_controller_js_1.default.find);
administratorRoutes.post("/", Administrator_controller_js_1.default.create);
administratorRoutes.put("/:id", Administrator_controller_js_1.default.update);
administratorRoutes.delete("/:id", Administrator_controller_js_1.default.delete);
exports.default = administratorRoutes;
//# sourceMappingURL=Administrator.routes.js.map