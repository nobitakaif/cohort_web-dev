const e = require('express');
const express=require('express')
const app=express()
app.use(express.json())



app.use(function(req,res,next){
    req.name="nobita"
    next()
})

app.get('/sum',function(req,res){
    console.log(req.name)
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.send("the sum of a and b is "+ (a+b))
})
app.listen(5000,function(){
    console.log("your server is running is on port 5000")
})

















// ---------------------------------just practicing on middleware----------------------------
/* let requestCounter=0
function requestCounterFn(req,res,next){
    requestCounter++;
    const userName=req.body;
    if(userName.name=="nobita" && userName.proffession=="software_eng"){
        next()
    }
    // res.status(400).send("sorry you can not join")

    // res.send(userName)
    // next()
    else{
        res.status(400).send("sorry you are not authorized")
    }
}
app.use(requestCounterFn)
app.get('/:name',requestCounterFn,function(req,res){
    const user=req.params.name
    res.send(user +" you're are at home page")
})
app.listen(4000,function(){
    console.log("your server is running on port 4000")
})

*/