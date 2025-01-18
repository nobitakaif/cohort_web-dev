import {WebSocketServer} from "ws"; // { WebSocketServer } is for creating a new server 
import WebSocket from "ws"; // WebSocket is for conecting to existing server that is already created  

const wss = new WebSocketServer({port:3000})

wss.on("connection", function(socket){
    socket.send("hii")
    socket.on("message", function(e){
        if(e.toString()==="ping"){
            socket.send("pong")
        }
    })
})