// import mongoose from "mongoose";
const mongoose=require('mongoose');

mongoose.set('strictQuery',false)
const connectToDB=()=>{
    try {
        mongoose.connect(process.env.DATABASE,()=>{
            console.log("connected to database ");
        })
    } catch (error) {
        console.log("Can't connect to the database due to ",error );
    }
}
module.exports=connectToDB();