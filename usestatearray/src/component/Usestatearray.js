import React, { useState } from 'react'

function Usestatearray() {
  const biodata = [
    {
      id:0 , myName:"om",age:19
    },{
      id:1 , myName:"jay",age:27
    }
  ]
  const [myArr,setmyArr] = useState(biodata);
   const clearArray= () =>{
    setmyArr([])
  }
  return (
    <div className='flex flex-col items-center place-content-center h-screen text-4xl font-bold '>
     {
      myArr.map((curEle) => {
        return <h1>id : {curEle.id} , Name : {curEle.myName} , Age : {curEle.age}</h1>
      })

      }
    <button onClick={clearArray} className='border-4xl border-blue-600 bg-slate-700 p-2 mt-5 text-white rounded-3xl pb-3' >clear</button>
    </div>
  )
}

export default Usestatearray