import mongoose from "mongoose";
import "dotenv/config";

class Database {
  public async connect(): Promise<void> {
    const mongoUrl = process.env.MONGO_URL;

    if (!mongoUrl) {
      throw new Error("MONGO_URL não definida");
    }

    await mongoose.connect(mongoUrl);
    console.log("Banco conectado com sucesso");
  }
}

const database = new Database();

export default database;