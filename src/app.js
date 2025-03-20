import { config } from "./config/index.js"
import express from "express"
import cookieParser from "cookie-parser"
import userRoutes from "./routes/user.routes.js"
import memberRoutes from "./routes/member.routes.js"

config.connectDB()

// Si vamos a configurar CORS, acá iría...
const app = express()
app.use(cookieParser())
app.use(express.json());

// La idea es solamente hacer mención de las rutas con use()
// pero toda la definición y su implementación viva en su archivo dedicado
app.use(userRoutes)
app.use(memberRoutes)

app.get("/", (req, res) => {
    res.send("FARA - Backend API v0.0.1")
})

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`)
})
