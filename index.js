import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from 'path';

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config({
    path: './.env'
});

const PORT = process.env.PORT || 4000;
const connectDB = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: "bookbank" // Specify the database name here
        });
        console.log(`DB Connected :) ${db.connection.host}`);
    } catch (error) {
        console.error("DB Connection Error :", error);
        throw error;
    }
};

// connect to mongoDB
connectDB()

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);




// depeloyment
if(process.env.NODE_ENV === "production"){
    const dirpath = path.resolve();
    app.use(express.static("Frontend/dist"));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(dirpath,"Frontend","dist","index.html"));
    })
    
}
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

// app.get("/",(req,res)=>{
//     app.use(express.static(path.resolve(dirpath,"Frontend","dist")));
//     res.sendFile(path.resolve(dirpath,"Frontend","dist","index.html"));
// });
// app.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}`);
// });