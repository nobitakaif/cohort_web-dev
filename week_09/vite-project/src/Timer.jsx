import { useEffect, useState } from "react";

export function Timer(){
    const [second,setSeecond]=useState(0)
    useEffect(()=>{
        setInterval(() => {
            setSeecond((prev)=>prev+1)
        }, 1000);
    },[])
    return (
        <div>{second} time </div>
    )
}