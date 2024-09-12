const express=require('express')
const app=express()
let allUsers=[{
        userName:"nobita",
        diseases:{
            first:'cold',
            second:'flu',
            third:'brain-disorder'
        }
    },
    {
        userName:"tahir",
        diseases:{
            first:'cancer',
            second:'mental',
            third:'fever'
        }
    },

]
app.use(express.json())
app.get('/:nobita',function(req,res){
    const userName=req.params.nobita
    let allDiseases=null;
    for(let i=0;i<allUsers.length;i++){
        if(allUsers[i].userName==userName){
            allDiseases=allUsers[i].diseases
        }
    }
    
    if(allDiseases){
        res.status(200).json({
            allDiseases
        })
    }
    else(
        res.status(400).send('somthing went wrong')
    )
    console.log("information of all user ")
    console.log(allUsers)
    console.log(userName + "all the diseases")
    console.log(allDiseases)
    
    
    // res.send(userName)
})
app.post('/newUser',function(req,res){
    const {userName,diseases}=req.body;
      allUsers.push({userName,diseases})
    res.send(userName + " you're successfully admitted")
})
app.put('/update/:user',function(req,res){
    const userName=req.params.user
    let diseasesOfUser=null
    let cnt=0;
    for(let i=0;i<allUsers.length;i++){
        if(allUsers[i].userName==userName){
            diseasesOfUser="now you are fit"
            break;
        }
        cnt++;
    }
    if(diseasesOfUser){
        allUsers[cnt].diseases=diseasesOfUser;
        res.status(200).send('everything is fine')
    }
    else{
        res.status(400).send("user is not exist")
    }
})
app.delete('/remove/:userName',function(req,res){
    const userName=req.params.userName
    // let deletedUser=null;
    let cnt=0;
    for(let i=0;i<allUsers.length;i++){
        if(allUsers[i].userName==userName){
            cnt++;
        }
    }
    allUsers.splice(cnt,1);
    
    res.status(200).send("user is successfully removed")
    console.log(allUsers)
})
app.listen(3000,()=>{
    console.log("your server is started on 3000")
})