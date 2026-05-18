"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
class Database {
    async connect() {
        const mongoUrl = process.env.MONGO_URL;
        if (!mongoUrl) {
            throw new Error("MONGO_URL não definida");
        }
        await mongoose_1.default.connect(mongoUrl);
        console.log("Banco conectado com sucesso");
    }
}
const database = new Database();
exports.default = database;
//# sourceMappingURL=database.js.map