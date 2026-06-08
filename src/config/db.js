import mongoose from "mongoose";
import "dotenv/config"

const MONGO_URL = process.env.MONGO_URL

async function connectDb () {
    try {
        await mongoose.connect(MONGO_URL)
        console.log("✅Banco de dados conectado")
    } catch (error) {
        console.log("❌Erro ao conectar com o banco de dados", error)
    }
}

export default connectDb;