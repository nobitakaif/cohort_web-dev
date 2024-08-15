const fs = require("fs")
// const newFile=fs.readFileSync("a.txt","utf-8");
// console.log(newFile)
fs.readFile("a.txt","utf-8",(err,res)=>{
    if(err){
        console.log("here's the some error")
    }else{
        console.log(res)
    }
})