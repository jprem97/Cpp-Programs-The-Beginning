import express from "express" 
import cors from "cors"
import cookieParser from "cookie-parser"
export const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({limit:"18kb"}))
app.use(express.static("../public"))
app.use(cookieParser())

//routes
import userRoute from "./routes/user.router.js"
 
app.use("/users",userRoute)



