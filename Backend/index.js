import express from "express";
import cors from "cors";
import router from "./Router/index.js"
import morgan from "morgan";
import dotenv from "dotenv"
import mongoose from "mongoose";

const app = express();
dotenv.config();
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
    console.log("hello.....")
    next();
})

app.use("/api/v1",router)

mongoose.connect(process.env.MONGODB).then(()=>{console.log("connected to backend")})

app.listen(8000,()=>{console.log("Port 8000")})