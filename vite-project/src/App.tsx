import { useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [socket,setSocket]=useState("")
  const inputRef=useRef()
  function sendMessage(){
    if(!socket){
      return 
    }
    // @ts-ignore
    const message=inputRef.current.value
    socket.send(message)
  }
  
  useEffect(()=>{
    const ws=new WebSocket("ws:localhost:3000")
    setSocket(ws)
    ws.onmessage=(e)=>{
      alert(e.data)
    }
  },[])
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="enter " />
      <button onClick={sendMessage}>send</button>
    </div>
  )
}

export default App
