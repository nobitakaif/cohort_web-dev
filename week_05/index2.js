const express=require('express')
const app=express()
let totalRequest={
    "userId":1
}
setInterval(function(){
    global={}
},3000)
app.use(function(req,res,next){
    const userId=req.header["user-id"]
    if(totalRequest[userId]){
        totalRequest[userId]++;

    }
})
// app.use(function isAge(req,res,next){
//     if(req.query.age>=16){
//        next()
//     }
//     else{
//         res.status(400).send("sorry you can not ride it")
//     }
// })
app.get('/ride1',function(req,res){
   
    res.status(200).send('you can ride it ')
})
app.listen(4000,()=>{
    console.log("your server is running on port 4000")
})