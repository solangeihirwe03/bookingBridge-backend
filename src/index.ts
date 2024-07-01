import express, {Request, Response} from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { config } from "dotenv";

config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.get("/", (re:Request, res:Response)=>res.status(200).json({message: "Welcome to booking bridge backend"}))

const port = process.env.PORT || 5000;

app.listen(port, ()=>{ console.log(`Server is running on port ${port}`)})
