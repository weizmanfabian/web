import express from "express";
import cors from 'cors';
import myconn from 'express-myconnection'
import mysql from 'mysql'
import defaultRoutes from './routes/defaultRoute.js'
import loginRoutes from './routes/loginRoute.js'
import { port } from "./config.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use("/server", defaultRoutes)
app.use("/", loginRoutes)

app.get("/", (req, res) => {
    res.send("Estás en el servidor")
})

app.listen(port, () => console.log(`Server running on port ${port}`))