import { useEffect, useRef } from "react";

export function usePrev(value){
    const prev=useRef()
    useEffect(()=>{
        prev.current=value
        console.log(prev.current)
    },[value])
    console.log(prev.current , " outside the useEffect")
    return prev.current

}