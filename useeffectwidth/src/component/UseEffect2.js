import { cleanup } from '@testing-library/react'
import React,{useState,useEffect} from 'react'

function UseEffect2() {
    const [widthCount, setwidthCount] = useState(window.screen.width)
    const actualwidth = () =>{
        setwidthCount(window.innerWidth)
    }    
    useEffect(() => {
        window.addEventListener("resize",actualwidth)
        return () => {
            window.removeEventListener(window.innerWidth)

        }
    },)
    
  return (
    <div className=''>
        <p>The actual size of the window is : </p>
        <h1>{widthCount}</h1>
    </div>
  )
}

export default UseEffect2