const express= require('express')
const app = express()

const users=[]

app.use(express.json())

function generateToken(){
    let option=['a','b','c','d','e','f','g','h','i','j','k','l'];
    let token=""
    for(let i=0;i<option.length;i++){
        token+=option[Math.floor(Math.random() * option.length)]

    }
    return token
}

app.post('/sign-up',function(req,res){
    const userName= req.body.userName
    const password=req.body.password
    let flag=false
    for(let i=0;i<users.length;i++){
        if(users[i].userName==userName){
            res.status(400).send("sorry, username should be unique")
            flag=true
        }    
    }
    if(!flag){
        users.push({
            userName:userName,
            password:password
        })
        console.log(users)
        res.send("congrates you're singed-in")
    }

})


app.post('/sign-in', function(req,res){

    const userName=req.body.userName
    const password=req.body.password

    let flag=false
    let foundUser=null
    let index=-1
    for(let i=0;i<users.length;i++){
        if(users[i].userName==userName && users[i].password==password){
            flag=true
            foundUser=users[i]
            index=i;
        }
    }

    if(flag){
        const token= generateToken()
        foundUser.token=token
        res.json({
            yourTokenIs: token
        })
        console.log(users[index])
    }
    else{
        res.status(400).send("invalid credential")
    }

    
})

app.post("/me", function(req,res){
    const getToken=req.headers.cookie;
    let foundUser=null
    for(let i=0;i<users.length;i++){
        if(users[i].token==getToken){
            foundUser=users[i]
        }
    }
    if(foundUser){
        res.status(200).json({
            name:foundUser.userName,
            password:foundUser.password
        })
    }
    else{
        res.status(400).send("you are unauthorize")
    }
})

app.use((err, req, res, next) => {
    // console.error(err.stack); 
  
    
    res.status(500).json({
      message: 'Something went wrong!'
    });
  });
app.listen(8000,console.log("server is running is port on 8000"))
