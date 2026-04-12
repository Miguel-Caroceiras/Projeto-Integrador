import mongoose, { Schema } from "mongoose";
import type { IAdmin } from "./category.types";

const adminSchema = new Schema<IAdmin>(
  {
    nome: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    senha: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Admin = mongoose.model<IAdmin>("Admin", adminSchema);

export default Admin;