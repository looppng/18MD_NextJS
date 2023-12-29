import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI environment variable is not defined");
    }

    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`connected mongoDB to ${connection.connection.host}`);
  } catch (error) {
    console.error("Error encountered: ", error);
    process.exit(1);
  }
};

export default connectMongoDB;
