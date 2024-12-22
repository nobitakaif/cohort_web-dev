// const express=require("express")
// const Router=express.Router();     we can write like this either like write the below 


const express=require("express")
const bcrypt= require("bcrypt")
const jwt = require("jsonwebtoken")
const JWT_SCRETE = "javaScript"
const { UserModel } = require("../db")
const {Router}=require("express") // this one is better we required only Router() from the express library that is defined in express library 

const {z}=require('zod') // zod for input validation, inputs parameter stricts 
const { now } = require("mongoose")
// const { UserModel } = require("../db")

const userRouter=Router()
userRouter.use(express.json())

// we don't need to write all the prefixes like /api/v1/user/signup becaues /api/v1/user is already defined in index.js files we're only worring about the /signup Routes, when the user put the URL http://localhost:8000/api/v1/user/signup then it will automatically pointed here what will matches below the routes
userRouter.post('/signup', async function(req,res){
    // defining the input formats
   

    const requiredBody=z.object({
        email:z.string().email(),
        password:z.string().min(8).max(40),
        firstName:z.string().min(3).max(40),
        lastName:z.string().min(3).max(20)
    })

    const passedInputs=requiredBody.safeParse(req.body)
    if(!passedInputs.success){
        console.log(passedInputs.error)
        return res.status(403).send({
            msg:"inputs are not following the right formats"
        })
    }

    const email=req.body.email
    const password=req.body.password
    const firstName= req.body.firstName
    const lastName= req.body.lastName

    const hashPassword= await bcrypt.hash(password,5) // hashing the password 

    
    try{  
        await UserModel.create({
            email:email,
            password:hashPassword,
            firstName:firstName,
            lastName:lastName
        })
    }catch(error){

        console.log("database crased")
        console.log(error.errmsg)
        return res.status(403).send({
            msg:"might be database are crashed try again login",
            error:error.errmsg
        })
    }

    res.status(200).send({
      msg:"you're successfully logged-in"
    })
})

userRouter.post('/signin', async function(req,res){
    const email = req.body.email
    const password = req.body.password

    const response = await UserModel.findOne({
        email:email
    })

    if(!response){
        return res.send({
            msg:"this email is not exist in our database"
        })
    }
    console.log(response)
    const unhashedPassword = await bcrypt.compare(password, response.password) // bcrypt.compare() return you true if password is matched otherwise return you false 

    if(!unhashedPassword){
        return res.send({
            msg:"incorrect password"
        })
    }

    else{
        const token=jwt.sign({
            id:response._id.toString()
        },JWT_SCRETE)
        res.status(200).send({
            token
        })
    }


})
module.exports={
    userRouter:userRouter
}