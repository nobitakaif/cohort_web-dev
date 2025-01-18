"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws"); // { WebSocketServer } is for creating a new server 
const wss = new ws_1.WebSocketServer({ port: 3000 });
wss.on("connection", function (socket) {
    socket.send("hii");
    socket.on("message", function (e) {
        if (e.toString() === "ping") {
            socket.send("pong");
        }
    });
});
