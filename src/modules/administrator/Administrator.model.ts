import mongoose, { Schema } from "mongoose";
import type { IAdministrator } from "./administrator.types.js";

export const administratorSchema = new Schema<IAdministrator>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    cpf: {
      type: String,
      required: true,
      trim: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const Administrator = mongoose.model<IAdministrator>(
  "Administrator",
  administratorSchema,
);

export default Administrator;