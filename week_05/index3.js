const express=require('express')
const cors=require('cors')
const app=express()
app.use(express.json())
app.use(cors())
app.post('/sum',function(req,res){
    const a = parseInt(req.body.a)
    const b = parseInt(req.body.b)
    console.log(a+b)
    res.send('your output is ' + a+b)
})
app.listen(5000,()=>{
    console.log('server is running on port 5000')
})