import { useEffect, useState } from "react";

export function Button(){
    const [currentValue, setCurrentValue]=useState(1)
    const [tabData,setTabData]=useState({})
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        setLoading(false)
        console.log("send a request to the backend to get the data for ", currentValue)
        fetch("https://jsonplaceholder.typicode.com/todos/" + currentValue).then(async(res)=>{
            const response=await res.json();
            setLoading(true)
            setTabData(response)
            
        })
        // return async ()=>{
        //     const response=await fetch("https://jsonplaceholder.typicode.com/todos/" + currentValue)
        //     response.json().then((res)=>{
        //         setTabData(res)
        //     })
        // }
    },[currentValue])
    
    return (
    <div>
        <button onClick={()=>setCurrentValue(1)} style={{color : (currentValue==1) ? "red" : "black"}}>todo 1</button>
        <button onClick={()=>setCurrentValue(2)} style={{color:(currentValue==2) ? "red" : "black"}}>todo 2</button>
        <button onClick={()=>setCurrentValue(3)} style={{color:(currentValue==3) ? "red" : "black"}}>todo 3</button>
        <button onClick={()=>setCurrentValue(4)} style={{color:(currentValue==4) ? "red" : "black"}}>todo 4</button>
        {/* {(loading)?tabData.title :"loading..."} */}
        {tabData.title}
    </div>
    )
}