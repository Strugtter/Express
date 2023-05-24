import mongoose from "mongoose";

let link = process.env.MONGO_URI;
mongoose.connect(link)
.then(()=>console.log("Database conected"))
.catch((error)=> console.log(error))
