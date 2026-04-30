import mongoose, { Schema } from "mongoose";

import type { IEspecialista } from "./especialista.types.js";

export const especialistaSchema = new Schema<IEspecialista>(
  {
    nome:{
      type: String,
      required: true,
      trim: true,
    },
    cpf: {
      type: String,
      required: true,
      trim: true,
    },
    dtNasc: {
      type: Date,
      required: true,
    },
    especialidade:{
      type: String,
      required: true,
    },
    documentoHabilitacao: {
      type: String,
      required: true,
    },
    telefone: {
      type: String,
      required: false,
      trim: true,
    },
    email: {
      type: String,
      required: false,
      trim: true,
    }
  },
  {
    timestamps: true,
  },
);

const Especialista = mongoose.model<IEspecialista>("Especialista", especialistaSchema);

export default Especialista;
