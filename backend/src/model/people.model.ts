import mongoose, { Document, Schema } from "mongoose";
import { IPeople } from "../types/peopleSchemaType";

// Define the Mongoose schema
const peopleSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    address: { type: String, required: true },
    birthOfDate: { type: String, required: true },
    deathOfDate: { type: String, required: false },
    institution: { type: String, required: true },
    causeOfDeath: { type: String, required: false },
    history: { type: String, required: true },
    personalImage: { type: String, required: true },
  },
  { timestamps: true }
);

// Create the Mongoose model
const People = mongoose.model<IPeople>("People", peopleSchema);

export default People;
