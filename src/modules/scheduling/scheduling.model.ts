import mongoose, { Schema } from "mongoose";
import type { IScheduling } from "./scheduling.types.js";

const schedulingSchema = new Schema<IScheduling>(
  {
    dateScheduling: {
      type: Date,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      required: true,
      trim: true,
    },
    expertId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Especialista"
    },
    patientId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Patient"
    },

  },
  {
    timestamps: true,
  },
);

const Schedling = mongoose.model<IScheduling>("Scheduling", schedulingSchema);

export default Schedling;
