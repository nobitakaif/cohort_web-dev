
import {  WebSocket, WebSocketServer } from "ws";

const wss= new WebSocketServer({port:8000})


interface User{
    socket:WebSocket,
    room:string
}
let allUser:User[]=[]
wss.on('connection', function (socket){
   //          "{
        //         "type":"join",
        //         "payload":{
        //              "roomId":"red"
        //              }
        //      }"
   socket.on("message",(message)=>{
    const convertObj=JSON.parse(message as unknown as string) // websocket can not understand json object it only understand string so we converted string into object, we're 100% sure it is object in string form 
    // we converted string into obj using JSON.parse() 
    //     

        if(convertObj.type=='join'){
            allUser.push({
                socket,
                room:convertObj.payload.roomID
            })
            
        }
   })
})