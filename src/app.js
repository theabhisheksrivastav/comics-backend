import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

import swaggerUi from 'swagger-ui-express';
import swaggerDocs from '../swagger.js';

const app = express()

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import
import  comicsRouter  from "./routes/comics.routes.js"

//routes declaration
app.use("/api/v1/comics", comicsRouter)


// http://localhost:8000/api/v1/users/register

export { app }