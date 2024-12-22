const express= require("express")
const jwt = require("jsonwebtoken")
const mongoose=require("mongoose")
const {userRouter} = require("./Routes/userRoutes")
const JWT_SCRETE="nobita"

const app=express()

app.use("/api/v1/user",userRouter)

async function main(){
    await mongoose.connect("mongodb+srv://mk2818356:xwnEzQkcVHfH9ihy@cluster0.jeq1u.mongodb.net/My_Courses")
    app.listen(4000,console.log("server is running on port 4000"))
}
main()
