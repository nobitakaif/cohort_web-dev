const express=require("express")
const jwt=require("jsonwebtoken")
const JWT_SCRETE="nobita"
const app=express()

let users=[{}]

app.use(express.json())

app.post('/sign-up', function(req,res){
    const userName=req.body.userName
    const password= req.body.password
    let flag=false
    for(let i=0;i<users.length;i++){
        if(users[i].userName==userName){
            flag=true
        }
    }
    if(flag){
       
        res.status(400).send("username should be unquie")
    }
    else{
        users.push({
            userName:userName,
            password:password
        })
        res.status(200).send("you're logged-in")
    }
})

app.post('/sign-in',function(req,res){
    const userName= req.body.userName
    const password=req.body.password

    let flag=false
    for(let i=0;i<users.length;i++){
        if(users[i].userName==userName && users[i].password==password){
            flag=true
        }
    }
    if(flag){
        const token=jwt.sign({
            userName:userName,
            // password:password
        },JWT_SCRETE) // jwt.sign() sign the jsonwebtoekn using the secret and username (you can add more thing in first parameter like username, password, phone-number , email...... etc)
        res.status(200).json({
            token:token
        })
        // res.header("token ", token);      this is the way to send the token in headers 
        
    }
    else{
        res.status(400).send("sorry, we don't know you")
    }
    
})

app.get('/me',function(req,res){
    const token=req.headers.token
    
    const decryptedInformation= jwt.verify(token,JWT_SCRETE) //  jwt.verify spit out again the original username { username:nobita }using the token and secret key  
    // if(!decryptedInformation){
    //     res.status(400).send("invalid token")
    // }
    // const tokenFunction=function decryptedFunction(){
    //     const ans={}
    //     const token=jwt.verify(token,JWT_SCRETE)
    //     return ans({
    //         token:token.userName
    //     })
    // }
    // if(!tokenFunction){
    //     res.status(400).send("invalid token")
    // }
    const userName= decryptedInformation.userName
    let foundUser=null
    
    for(let i=0;i<users.length;i++){
        if(users[i].userName==userName){
            // foundUser="great"
            console.log(users[i])
            res.status(200).json({
                password:users[i].password
            })
        }
    }
    
    
})
app.use((err,req,res,next)=>{
    if(err){
        console.log(err)
        res.status(400).send("this is your fault not server, your token could be invalid")
    }
    else{
        next()
    }
})

app.listen(1024, console.log("server is running is port on 4000"))