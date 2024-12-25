import { useEffect, useState } from "react"

export function Clock(){
    const [count, setCount]=useState(0)
    function countIncreaser(){
        console.log("this is use state")
        setCount((current)=>{
            return current +1
        })
    }
    useEffect(()=>{
        console.log("useEffect 1")
        setInterval(countIncreaser,1000)
        return ()=>{
            console.log("return statement of 1")
        }
    },[])

    useEffect(()=>{
        console.log("useEffect 2")
    },[])
    
    useEffect(()=>{
        console.log("useEffect 3")
    },[])

    return (
        <div>
            {count}
        </div>
    )
}