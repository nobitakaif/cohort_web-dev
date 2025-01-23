"use client"
import exp from "constants";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";


export default function (){

  return <div>
    <SessionProvider>
      <Home/>
    </SessionProvider>
  </div>
}

 function Home() {
  const session = useSession()
  return (<div className="flex h-screen w-full justify-center items-center">
  
      
      {session.status=="authenticated" && <button onClick={()=>signOut()}>logOUt</button>}
      {session.status == "unauthenticated" && <button onClick={()=>signIn()}>login</button>}
      </div>
  );
}

