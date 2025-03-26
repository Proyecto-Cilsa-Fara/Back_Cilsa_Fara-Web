import mongoose from "mongoose";
import envConfig from "./env.config.js";

const URI = envConfig.DATABASE_URI;
const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

async function connectDB() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(URI, clientOptions);
    console.log("🚀 Database connected successfully");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1);
  }
}

export default connectDB;
