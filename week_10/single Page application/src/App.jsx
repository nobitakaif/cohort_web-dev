import {BrowserRouter,Routes,Route,Link, useNavigate, redirect, Outlet} from 'react-router-dom'
function App() {
  return <div>
    {/* <a href='/'>Landing Page |</a><br />
    <a href='/jobs'>jobs Page</a><br /> */}

  <BrowserRouter>
   
    <Routes>
      <Route path='/' element={<Layouts/>}>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/jobs" element={<Jobs/>}/>
        <Route path='*' element={<NotExist/> }/>
        <Route path="/notification" element={<Notificatio/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  </div>
}
function Layouts(){
  return <div style={{height:"100vh", backgroundColor:"black", color:'white'}}>
      <Link to='/'>Landing Page   |</Link>
      <Link to='/jobs'>Jobs Page | </Link>
      <Link to='/notification'>notification Page  |</Link>
      <div style={{height:'90vh' , backgroundColor:'white', color:'black'}}>
      <Outlet/>
      </div>
      footer
  </div>
}
function LandingPage(){
  return <div >
    <h1>This is Landing Page</h1>
  </div>
}
function NotExist(){
  return <h1>Sorry page not found</h1>
}
function Jobs(){
  return <div>
    <h1>This is Jobs Page</h1>
  </div>
}

function Notification(){
  const navigate=useNavigate()
  return <div>
    <button onClick={()=>navigate('/jobs')}>back to jobs page</button>
    <h1>This is Notification Page</h1>
  </div>
}

function backtToback(){
  const navigate=useNavigate()
  
  return <button onClick={()=>navigate('/')}>Back to landing page</button>
}
export default App
