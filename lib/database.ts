import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

let isConnected = false;

const connectToDb = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("mongodb is connected");
    return;
  }
  try {
    await mongoose.connect(process.env.M0NGODB_URI!, {
      dbName: "hotelmangement"
    });

    isConnected = true;
    console.log("mongodb is connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDb;
