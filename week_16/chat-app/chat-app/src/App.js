"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const inputBox_1 = require("./comonents/inputBox");
const messageBox_1 = require("./comonents/messageBox");
const sendButton_1 = require("./comonents/sendButton");
const sidebar_1 = require("./comonents/sidebar");
function App() {
    const [socket, setSocket] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        const ws = new WebSocket("ws://localhost:8080");
        setSocket(ws);
        ws.onmessage = (e) => {
            alert(e.data);
        };
    });
    function send() {
        if (!socket) {
            return;
        }
        socket.send("ping");
    }
    return <div className="bg-white-300 h-screen w-full flex ">
    <div>
    <sidebar_1.Sidebar />
    </div>
    <div className="w-full flex flex-col h-screen">
      <div className="h-full">
        <messageBox_1.MessageBox />
      </div>
      <div className="flex mb-20">
        <div className="w-full">
        <inputBox_1.InputBox />
        </div>
        <div>
          <sendButton_1.SendButton sendMessage={send}/>
        </div>
      </div>
    </div>
  </div>;
}
exports.default = App;
