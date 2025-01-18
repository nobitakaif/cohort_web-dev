import { use } from "react"
import { SidebarIcon } from "./icons/SidebarIcon"
import { useState } from "react"



export default function App(){
  return <div className="flex ">
    <Sidebar/>
    <Content/>
  </div>
}


function Sidebar(){
  // const [hide,setHide]=useState(true)
  return <div> 
      <div className="bg-green-200 h-screen w-96">
       <div className="cursor-pointer fixed top-0 left-0">
         <SidebarIcon/>
       </div>
     </div>
   
  </div>
}

function Content(){
  return <div className="w-full">
    <div className="bg-black h-72 shadow-lg shadow-gray-400 "></div>
    <div className="grid grid-cols-11 gap-8 m-8">
      <div className="bg-red-200 col-span-2 h-80 rounded-3xl shadow-lg shadow-black -translate-y-24">

      </div>
      <div className="bg-yellow-200 col-span-6 rounded-3xl shadow-lg shadow-black">

      </div>
      <div className="bg-slate-400 col-span-3 rounded-3xl shadow-lg shadow-black"></div>
    </div>

  </div>
}