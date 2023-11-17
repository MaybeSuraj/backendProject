import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(
      `Database connected successfully\n\nHost: ${connection.connection.host}`
    );
  } catch (error) {
    console.log("Mongo Db Connection Error: ", error);
    process.exit(1);
  }
};


export default connectDB;