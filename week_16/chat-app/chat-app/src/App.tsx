import { useEffect, useState } from "react"
import { InputBox } from "./comonents/inputBox"
import { MessageBox } from "./comonents/messageBox"
import { SendButton } from "./comonents/sendButton"
import { Sidebar } from "./comonents/sidebar"

function App() {
  const [socket,setSocket] = useState<WebSocket>()

  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080")
    setSocket(ws)
    ws.onmessage=(e)=>{
      alert(e.data)
    }
  })

  function send(){
    if(!socket){
      return
    }
    socket.send("ping")
  }

  return <div className="bg-white-300 h-screen w-full flex ">
    <div>
    <Sidebar/>
    </div>
    <div className="w-full flex flex-col h-screen">
      <div className="h-full">
        <MessageBox/>
      </div>
      <div className="flex mb-20">
        <div className="w-full">
        <InputBox/>
        </div>
        <div>
          <SendButton sendMessage={send}/>
        </div>
      </div>
    </div>
  </div>
   
}

export default App
