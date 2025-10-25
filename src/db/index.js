// professinal way to write connecttin code 
import mongoose from  "mongoose"
import dotenv from "dotenv"
import * as cons from "../constants.js"

// dotenv.config()


const connectDB = async() =>{
    try {
         const connection_instance = await  mongoose.connect(`${process.env.MONGO_URI}/${cons.DB_NAME}`)
        //  console.log(connection_instance)
    } catch (error) {
        console.log(`ERROR `)
        throw error;
    }
}

export  default connectDB ;