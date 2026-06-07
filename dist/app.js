"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_js_1 = __importDefault(require("./routes.js"));
class App {
    constructor() {
        this.server = (0, express_1.default)();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.server.use((0, cors_1.default)());
        this.server.use(express_1.default.json());
        this.server.use(express_1.default.urlencoded({ extended: true }));
    }
    routes() {
        this.server.use("/api/v1", routes_js_1.default);
    }
}
const app = new App().server;
exports.default = app;
//# sourceMappingURL=app.js.map