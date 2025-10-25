import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js"

dotenv.config();//path for explicitly mentioning .env


connectDB()
    .then((resolve) => {
        try {
            app.listen(process.env.PORT || 8000, () => {
                console.log(`the port is ready to listen on ${process.env.PORT}`)

            });
        } catch (error) {
            console.log("error hai...tagda wala ")
        }

    })
    .catch((error) => {
        console.log("error hai")
    })





/*
;(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${cons.DB_NAME}`)
        app.on("error",(error)=>{
            console.log("error", error)
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`listening on ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("error:",error)
    }


})()
*/