import mongoose, { Document, Schema } from "mongoose";
import { IPeople } from "../types/peopleSchemaType";

// Define the Mongoose schema
const peopleSchema: Schema = new Schema(
  {
    name: { type: String },
    age: { type: Number },
    address: { type: String },
    birthOfDate: { type: String },
    died: { type: String },
    institution: { type: String },
    causeOfDeath: { type: String },
    history: { type: String },
    personalImage: { type: String },
  },
  { timestamps: true }
);

// Create the Mongoose model
const People = mongoose.model<IPeople>("People", peopleSchema);

export default People;
