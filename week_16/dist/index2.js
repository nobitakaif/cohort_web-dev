"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8000 });
let allUser = [];
wss.on('connection', function (socket) {
    //          "{
    //         "type":"join",
    //         "payload":{
    //              "roomId":"red"
    //              }
    //      }"
    socket.on("message", (message) => {
        const convertObj = JSON.parse(message); // websocket can not understand json object it only understand string so we converted string into object, we're 100% sure it is object in string form 
        // we converted string into obj using JSON.parse() 
        //     
        if (convertObj.type == 'join') {
            allUser.push({
                socket,
                room: convertObj.payload.roomID
            });
        }
    });
});
