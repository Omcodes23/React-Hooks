import React,{useEffect ,useState} from 'react'

function Useeffect() {
     const [count, setcount] = useState(0)
    useEffect(() => {
        if(count >= 1){
            document.title = `Count(${count})`

        }else{
            document.title = `Count`
        }
    },[count])
    function increment() {
        setcount(count + 1)
    }
  return (
    <div className='flex h-screen items-center flex-col justify-center'>
        <h1>{count}</h1>
        <button className='p-3 bg-slate-600 mt-3 text-white' onClick={increment}>Click me😁</button>
    </div>
  )
}

export default Useeffect