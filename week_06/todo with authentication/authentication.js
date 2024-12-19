const express= require("express")
const jwt = require("jsonwebtoken")
const cors= require("cors")
const JWT_SCRETE="nobita"

const app=express()
const users=[]  // [{  email:"nobita@gmail.com", password:"18112004"}]
app.use(express.json())
app.use(cors())

app.post('/signup',function(req,res){
    const email= req.body.email
    const password= req.body.password
    
    for(let i=0;i<users.length;i++){
        if(users[i].email==email){
            return res.status(400).json({
                msg:"This user is already exist"
            })
        }
    }
    users.push({
        email,
        password
    })
    console.log(users)
    res.status(200).send("user is logged in")
})

app.post('/signin', function(req,res){
    const email=req.body.email
    const password=req.body.password
    let foundUser=null
    for(let i=0;i<users.length;i++){
        if(users[i].email==email && users[i].password==password){
            foundUser=users[i]
        }
    }
    if(!foundUser){
        // alert("credentials are incorrects")
        return res.status(400).send("you're not logged in")
    }
    else{
        const token = jwt.sign({
            email:foundUser.email
        },JWT_SCRETE)
        // alert("you're are logged-in")
        return res.status(200).send({
            token
        })
    }
})

app.get('/me',function(req,res){
    const respone=req.headers.token
    console.log(respone)
    const token=jwt.verify(respone,JWT_SCRETE)
    // console.log(token.email+ '  ' + token.password)
    let foundUser=null
    for(let i=0;i<users.length;i++){
        if(users[i].email == token.email){
            foundUser=users[i];
            console.log(users[i])
            break;
        }
    }
    console.log(users)
    console.log(foundUser)
    if(!foundUser){
        console.log("something is wrong with token")
        res.status(403).send("token invalid")
    }else{
        res.status(200).send({
            email:foundUser.email,
            password:foundUser.password
        })
    }
})

app.listen(4000, console.log("server is running on port 4000"))