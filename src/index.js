import express from "express"
import "dotenv/config"
import connectDb from "./config/db.js"
import router from "./routes/routes.js"
import cors from "cors"


const PORT = process.env.PORT

const app = express();
app.use(cors({
    origin: "https://confirmationinvite.netlify.app"
}))
app.use(express.json())
app.use(router)

const startServer = async () => {
    await connectDb();
    app.listen( PORT, () => console.log(`✅Servidor rodando na porta ${PORT}`))
}

startServer();