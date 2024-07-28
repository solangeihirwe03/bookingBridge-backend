import express, {Request, Response} from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { config } from "dotenv";
import router from "./router";
import SwaggerUi from "swagger-ui-express"
import Document from "../swagger.json"

config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.get("/", (req:Request, res:Response)=>res.status(200).json({message: "Welcome to booking bridge backend"}))

const port = process.env.PORT || 5000;

app.use("/api", router)
app.use("/api-docs", SwaggerUi.serve,SwaggerUi.setup(Document))

app.listen(port, ()=>{ console.log(`Server is running on port ${port}`)})