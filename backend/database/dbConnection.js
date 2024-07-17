import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"HMS_MERN"
    }).then(()=>{
        console.log("DB Connected");
    }).catch((err)=>{
        console.log(`Some Error occured while Connecting Database: ${err}`);
    });
};