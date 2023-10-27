import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("Om Vataliya")
  const changeName = () =>{
    let val = name;
    if(val === "Om Vataliya" ){
      setName("God² tech hub")
    }else{
      setName("Om Vataliya")
    }
  }
  return (
    <>
      <div className='w-full h-screen flex justify-center items-center flex-col '>
        <div className='m-7 text-4xl font-bold'>
          <p>{name}</p>
        </div>
        <div className='m-3 '>
          <button onClick={()=>changeName()}>Click me</button>
        </div>
      </div>
    </>
  )
}

export default App
