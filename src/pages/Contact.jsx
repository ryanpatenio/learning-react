
import { useState, useRef, useEffect, useLayoutEffect } from 'react'

const Contact = () => {
  const [count, setCount] = useState(0);
  // const btnRef = useRef(null);
  // const [count2, setCount2] = useState(0);

  const handleClick = () => {
    setCount(count + 1)
  }
  
  const handleDecrement = () => {
    if(count > 0){
      setCount(count - 1);
    }   
  }

  useEffect(() => {
    setCount((prev) => prev + 1);
  },[])

  useLayoutEffect(() => {
      console.log("use Layout Effect")
  },[])
  // useEffect(()=>{

  //   const timerId = setTimeout(()=>{
  //     console.log(`timer Count : ${count}`)
  //   },2000)
  //   return () => {
  //     clearTimeout(timerId);
  //   }

  // },[count])

  // const handleClick2 = () => {
  //   setCount2(count2 + 1)
  // }
  // useEffect(() => {
  //  console.log("palaging nag ru run");
  // })
  // useEffect(() => {
  //   console.log("Only run once");
  //  },[])

  //  useEffect(() => {
  //   console.log("Count 2 Dep :",count2);
  //  },[count2])


  return (
    <div className='d-flex flex-column'>
      
      This is Contact Page

      <h2 className=''>count : <strong>{count}</strong></h2>
       <button onClick={handleClick} className='btn btn-primary w-25 '> Increment</button>
       {/* <button onClick={handleClick2} className='btn btn-primary w-25 mt-2'> Increment UseEffect</button> */}
       <button onClick={handleDecrement} className='btn btn-warning mt-2 w-25'>Decrement</button>
      
    </div>
  )
}

export default Contact