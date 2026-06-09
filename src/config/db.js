import mongoose from "mongoose";
import "dotenv/config";

const MONGO_URL = process.env.MONGO_URL;

async function connectDb() {
  try {
    console.log("MONGO_URL existe?", !!MONGO_URL);

    await mongoose.connect(MONGO_URL);

    console.log("✅ Banco de dados conectado");
  } catch (error) {
    console.log("❌ Erro ao conectar");
    console.log(error);
  }
}

export default connectDb;