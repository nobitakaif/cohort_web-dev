
import {atom, RecoilRoot, useRecoilValue, useSetRecoilState} from 'recoil'

export default function App(){
  return <RecoilRoot>
    <Counter/>
  </RecoilRoot>
}

const counterAtom=atom({
  key:"counter",
  default:0
})
function Counter(){
  return <div>
    <Value/>
    <Button/>
    </div>
}

function Value(){
  const value=useRecoilValue(counterAtom)
  return <div>
    {value}
  </div>
}
function Button(){
  const setValue=useSetRecoilState(counterAtom)
  function increase(){
    setValue(c=>c+1)
  }
  function decrease(){
    setValue(c=>c-1)
  }
  return <div>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>

  </div>
}



// import { useRef } from "react";

// export default function App(){
//   function mainFn(){
//     fetch("https://amazon.com")
//     // console.log("heelop")
//   }
//   const debounceFn=useDebounce(mainFn)

//   return <div>
//     <input type="text" onChange={debounceFn} placeholder="enter"></input>
//     <button>click</button>
//   </div>
// }

// function useDebounce(mainFn){
//   const currentClock=useRef()

//   const fn=()=>{
//     clearTimeout(currentClock.current)
//     currentClock.current=setTimeout(mainFn,300)
//   }
//   return fn
// }

// import React, { useEffect, useRef, useState } from 'react';
// import { use } from 'react';

// export default function App(){
//   const [count,setCount]=useState(0)
//   const prev=useRef()
//   console.log("before ",count);
//   useEffect(()=>{
//     console.log(prev.current)
//     prev.current=count
//   },[count])
//   // count+1
//   return <>
//       {count}{prev.current}
//       <button onClick={()=>setCount(c=>c+1)}>click</button>
//   </>
// }

// function useFetch(url){
//   const [data,setData]=useState({})
//   async function getPost(){
//     const response=await fetch(url)
//     const json=await response.json()
//     setData(json)
//   }
//   useEffect(()=>{
//     getPost()
//   },[])
//   return{
//     data:data
//   }
// }


// function Chat() {
//   const [messages, setMessages] = useState(["Hello!", "How are you?"]);
//   const chatBoxRef = useRef(null);

//   // Function to simulate adding new messages
//   const addMessage = () => {
//     setMessages((prevMessages) => [...prevMessages, "New message!"]);
//   };

//   // Scroll to the bottom whenever a new message is added
//   useEffect(() => {
//     chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
//   }, [messages]);

//   return (
//     <div>
//       <div 
//         ref={chatBoxRef} id='1'
//         style={{ height: "200px", overflowY: "scroll", border: "1px solid black" }}
//       >
//         {messages.map((msg, index) => (
//           <div key={index} id='2'>{msg}</div>
//         ))}
//       </div>
//       <button onClick={addMessage}>Add Message</button>
//     </div>
//   );
// }

// export default Chat;




// import { Children } from "react";
// import { useEffect } from "react";
// import { useState } from "react";

// export default function App(){
  // const [count,setCount]=useState(0)
  // const [timer,setTimer]=useState(0)
  // console.log(timer+ " before")
  // function start(){
  //   let value=setInterval(()=>[
  //     setCount(c=>c+1)
  //   ],1000)
  //   // console.log(value)
  //   setTimer(value)
  // }
  // function stop(){
  //   console.log(timer)
  //   clearInterval(timer)
  // }
  // return <div>
  //   {count}
  //   <button onClick={start}>start</button>
  //   <button onClick={stop}>stop</button>
  // </div>
// }

// function Card({children}){
//   const [data,setData]=useState({})
//   // try{useEffect(()=>{
//   //   const data=fetch("https://jsonplaceholder.typicode.duv.com/todos/100").then(async (res)=>{
//   //     const json=await res.json()
//   //     setData(json)
//   //   })
//   // },[data])}catch(e){
//   //   console.log(e)
//   // throw new Error("error bounds here")
//   return <div>
//     {children}
//   </div>
   
// }

// function Counter({name}){
//   const [count,setCount]=useState(0)
//   const [count2,setCount2]=useState(0)

//   function increase(){
//     setCount(c=>c+1)
//   }
//   function decrease(){
//     setCount2(c=>c-1)
//   }
//   useEffect(()=>{ 
//     setInterval(increase,2000)  
//     setInterval(decrease,5000)
//     console.log(name)
//     return ()=>{console.log(name+" is unmounted")}
//   },[])
  
//   useEffect(()=>{
//     console.log("alright")
//   },[count,count2])

//   return (
//     <>
//     {count}<br/>{count2}
//     </>
//   )
// }