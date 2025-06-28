import express from "express"
import cors from "cors"
import usersRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"

const app = express()
app.use(cors())
app.use(express.json())

app.use("/usuarios", usersRoutes)
app.use("/login", authRoutes)

app.listen(3000, () => console.log("Servidor corriendo en puerto 3000"))
