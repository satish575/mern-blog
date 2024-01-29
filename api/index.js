import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js"
dotenv.config();

const app=express();
app.use(express.json());
app.use("/api/user",userRoutes)
app.use("/api/auth",authRoutes)

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || "Internal server error";
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
});
mongoose.connect(process.env.MONGODB).then((respnse)=>{
   
}).catch((error)=>{
   console.log(error);
})
app.listen(4000,()=>{
    console.log(`server is running on port 4000`);
})




