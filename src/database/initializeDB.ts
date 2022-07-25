import mongoose from "mongoose";
import { db_url } from "../constants";

export const initializeDB = async () => {
  try {
    await mongoose.connect(`${db_url}`);
    console.log("DB connected");
  } catch {
    console.log("DB failed to connect");
  }
};

export const db = mongoose.connection;
