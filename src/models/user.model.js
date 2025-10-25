import { model, Schema } from "mongoose";
import bycrpt from "bycrpt";
import jwt from "jsonwebtoken";
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true
        },
        fullname: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avatar: {
            type: String,
            //url from cloud in string format 
        },
        coverImage: {
            type: String
            //url from cloud in string format
        },
        watchhistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true, "Password required"]
        },
        refreshtokens: {
            type: String,

        }



    },
    {
        timestamps: true
    }
)
userSchema.pre("save",async function  (next){
    if(!thispassword.Modified("password")) return next();
    this.password=bycrpt.hash(this.password,10)
    next();
})
userSchema.methods.isPasswordcorrect=async function (password){
  return await bycrpt.compare(password,this.password)
}
userSchema.methods.generateRefreshToken= function (){
   return  jwt.encrption(
    {
        id:this._id,
        email:this.email,
        username:this.username,
        fullname: this.fullname
    },
    process.env.REFRESH_TOKEN_SCERET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
 

)}
userSchema.methods.generateAccessToken = function ()
{
     return  jwt.encrption(
    {
        id:this._id,
        email:this.email,
        username:this.username,
        fullname: this.fullname
    },
    process.env.REFRESH_TOKEN_SCERET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
 

)
}

export const User = model("User", userSchema)
