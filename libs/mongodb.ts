import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI environment variable is not defined");
    }

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("connected to mongodb");
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default connectMongoDB;
