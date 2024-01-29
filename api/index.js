import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const app=express();

mongoose.connect(process.env.MONGODB).then((respnse)=>{
   
}).catch((error)=>{
   console.log(error);
})
app.listen(4000,()=>{
    console.log(`server is running on port 4000`);
})

