// import { useState } from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { PostComponent } from './array'
import { Clock } from './Clock'
import { Button } from './Button'
import { Timer } from './Timer'
import { Card } from './Card'
// import './App.css'

function App() {
 
  return (
    <div >
       {/* <ConditionalRender/>
       <NotificaionCount/> */}
       <Card>
          <h2>Card Title</h2>
          <h1>hii everyone</h1>
       </Card>
       {/* <Timer/> */}
       {/* <Button /> */}
       {/* <Clock/> */}
       {/* <PostComponent/> */}
      {/* <PostComponent/><br /> */ }
      {/* <PostComponent/><br /> */}
      {/* <ProfileCard /> */}
      
      

    </div>
  )
}

const style={width:400, borderRadius:20, display :"flex", height:100, backgroundColor:"#b2bec3", }

// function PostComponent(){

//   return <div> 
//     <div style={style}>
//         <img src={reactLogo} alt="" style={{
//           width:50,
//           height:50,
//           marginLeft:15,
//           marginTop:20
//         }}/>
//         <div style={{marginLeft:10,marginTop:15}}>
//             <div><b>
//                 React Page
//               </b>
//             </div>
//             <div>
//               19 million
//             </div>
//             <div>
//               10m ago
//             </div>
//         </div>
//       </div>
//   </div>
// }

function NotificaionCount(){
  const [notification, setNotification]=useState(0)

  return <div>
    <button onClick={()=>setNotification(notification+1)}>increase notification</button>
    {notification}
  </div>
}

function ConditionalRender(){
    const [visible, setVisible]= useState(true);
    console.log("re-render")
    function toggle(){
      setVisible(!visible)
    }
    return <div>
      <button onClick={toggle}  > click here </button>
      {visible==true && <p>this is conditionaly reder</p>}

    </div>
}

function ProfileCard(){
  return <div style={{backgroundColor:"red",height:300,width:400, borderRadius:20}}>
    <img src={viteLogo} alt="" style={{
      height:100,
      marginTop:200
    }}/>
    <div style={{backgroundColor:"gray", height:80, position:'absolute',width:400, }}></div>
    <img src={viteLogo} alt="" style={{
      height:70,
      marginLeft:"38%",
      marginBottom:200
    }}/>
    <div></div>
    <div></div>

  </div>
}
export default App
