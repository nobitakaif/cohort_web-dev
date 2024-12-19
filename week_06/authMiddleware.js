const express= require('express')
const jwt = require("jsonwebtoken")
const JWT_SCRETE="nobita"
const app=express()

app.use(express.json())
const users=[]

app.post('/signup', function(req,res){
    const username= req.body.username
    const password= req.body.password
    
    for(let i=0;i<users.length;i++){
        if(users[i].username==username){
            res.status(400).send("username should be unique")
            return
        }
    }
    
    users.push({
        username,
        password
    })

    res.status(200).send("you're successfully logged-in")
})

app.post('/signin', function(req,res){
    const username=req.body.username
    const password=req.body.password
    let foundUser=null
    for(let i=0;i<users.length;i++){
        if(users[i].username==username && users[i].password==password){
            foundUser=users[i]
        }
    }
    if(!foundUser){
        res.status(400).send("credentials are incorrects")
    }
    else{
        const token=jwt.sign({
            username
        },JWT_SCRETE)
        
        res.status(200).json({
            token
        })
    }

})

app.use(function(req,res,next){
    const token = req.headers.token

    if(!token){
        res.status(400).send("please send us the token")
    }

    const decryptedToken= jwt.verify(token,JWT_SCRETE)

    if(decryptedToken.username){
        let foundUser=null

        for(let i=0;i<users.length;i++){
            if(users[i].username==decryptedToken.username){
                foundUser=users[i]
            }
        }
        req.username=foundUser.username;   // sending the username to all the next handlers because next handler don't has access of username from the middleware
        req.password=foundUser.password
        res.header("Authorization",`Bearer ${token}`)
        next()
    }
    else{
        res.status(400).send("you're not logged in")
    }

})   

app.get('/checkPassword', function(req,res){
    res.status(200).json({
        username:req.username,
        password:req.password
    })
})

app.listen(4000, console.log("server is running is port on 4000"))