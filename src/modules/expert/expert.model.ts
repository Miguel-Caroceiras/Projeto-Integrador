import mongoose, { Schema } from "mongoose";

import type { IExpert } from "./expert.types.js";

export const expertSchema = new Schema<IExpert>(
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
    specialty: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Specialty"
    },
    professionalDocument: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
      trim: true,
    },
    email: {
      type: String,
      required: false,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const Expert = mongoose.model<IExpert>("Expert", expertSchema);

export default Expert;
