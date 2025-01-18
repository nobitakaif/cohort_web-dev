import './App.css'
import Bubble from './Bubble'
function App() {
  return(
    <>
    <Bubble/>
     {/* <Text/>
     <Input/> */}
    </>
  )
}

function Text(){
  return (
    <div>
      <div className='flex justify-center mt-10'>
        <h1 className='text-green-300 text-5xl'>Webinar<span className='text-white'>.gg</span></h1>
      </div>
      <div className='flex justify-center mt-20 text-white   text-4xl '>
        <h3>Verify Your Age</h3>
      </div>
    </div>
  )
}

function Input(){
  return (
    <>
    <div className='flex justify-center item-center'>
      <p>Please confirm your birth year. This data will not be stored</p>
      <input type="text" />
      </div>
    </>
  )
}

export default App
