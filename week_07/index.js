const express =require("express")
const {z, object}=require("zod")
const {UserModel, TodoModel}= require("./db.js")
const jwt = require("jsonwebtoken")
const bcrypt= require("bcrypt")
const JWT_SCRETE="NOBITA"
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://mk2818356:xwnEzQkcVHfH9ihy@cluster0.jeq1u.mongodb.net/freshOne")
const app= express()
app.use(express.json())

// using zod library for input vaildation. sometime bad user does not send us right format of data so we are spicifing inputs, if input parameter not following the specified format then we throw an msg 

app.post("/signup", async function(req,res){

    // specifing input that given req.body by user should be followed by this format
    const specifiedInput=z.object({
        email:z.string().min(3).max(50).email(), //email should be only string not number object or other, should be minimum 3 letter maximum 50 letter as well as following email format like abc@gmail.com
        password:z.string().min(3).max(40),
        name:z.string().min(3).max(40)
    })

    const checkInputs=specifiedInput.safeParse(req.body)
    // safeParse return you object {success, data, error} if success is true that means user sent us right formats if false then we should have to send a msg to user pls send right formats
                  // safeParse object look like
            // {
            //      success: boolean (ture/fase),
            //      data : {msg},
            //      error: []
            // }
            
    if(!checkInputs.success){
        return res.send({
            msg:"you enter wrong inputs",
            error:checkInputs.error
        })
    }

    const email= req.body.email
    const password= req.body.password
    const name= req.body.name
    
    // hashing the password and adding the salt (salting) before storing into the database, we're using  the built-in library i.e bcrypt

    let hashPassword= await bcrypt.hash(password,5)
    // console.log(hashPassword)

    // here might be throw an error during the putting data inside the db, so we make sure it wrapped in try catch block
    try {
        await UserModel.create({
            email:email,
            password:hashPassword,
            name:name
        })
    } catch (error) {
        console.log("database crashed")
        console.log(error)
        return res.status(500).send("sorry, i'm unable to put your data in our db")
    }
    res.status(200).send("you're successfully logged in")
})

app.post("/signin", async function(req,res){
    const name= req.body.name
    const email= req.body.email
    const password=req.body.password

    const respone= await UserModel.findOne({
        name:name
        // email:email
    })
    if(!respone){
        return res.status(403).send({
            msg : "this name is does not exist in our database"
        })
    }

    const passwordMatch= await bcrypt.compare(password, respone.password) // bcrypt.compare() return you true if password matched either return you false, parameter -> (user current password what they entered , what they stored password while logging inot website) 

    if(!passwordMatch){
        console.log("user not found")
        res.status(403).send("you're not logged in ")
    }
    else{
        const token=jwt.sign({
            id:respone._id.toString()
        },JWT_SCRETE)
        res.status(200).send({
            token
        })
    }
})

app.use(function(req,res,next){
    const getToken= req.headers.token
    const decodedToken=jwt.verify(getToken,JWT_SCRETE)
    if(decodedToken){
        req.userId=decodedToken.id
        next()
    }
    else{
        res.status(403).send({
            msg:"incorrect credential"
        })
    }
})

app.post("/todo", function(req,res){
    const userId=req.userId
    
    res.status(200).send({
        userId:userId
    })
})

app.get("/todos", function(req,res){
    
})

app.listen(3000,console.log("server is running on port 3000"))