

let app=()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res()
        },2000)
    })
}
app.then((res)=>{
    console.log("success")
})
app.catch((rej)=>{
    console.log("got some error")
})
















// `function getData(id, getNextData){
//     setTimeout(function (){
//         console.log("data is ",id)
//         if(getNextData){
//             getNextData()
//         }
//     },3000)
// }
// // callback hell (nested pyramid)
// getData(101,function(){
//     console.log("getting data 2 ...")
//     getData(102,()=>{
//         console.log("gettting data 3 .....")
//         getData(103,wow=()=>{
//             console.log("getting data 4 ....")
//             getData(104)
//         })
//     });
// })`
