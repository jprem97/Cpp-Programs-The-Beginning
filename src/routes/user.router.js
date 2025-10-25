import express from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multermiddleware.js";

const router = express.Router();

router.route("/register").post(
    upload.fields({
        name:"avatar",
        maxcount:1},
    {
        name:"coverImage",
        maxcount:1
    }),
    registerUser)
export default router ;

