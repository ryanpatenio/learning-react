
import { useState, useRef, useEffect } from 'react'

const Contact = () => {
  const [count, setCount] = useState(0);
  const btnRef = useRef(null);

  const handleClick = () => {
    setCount(count + 1)
  }
  const handleDecrement = () => {
    if(count > 0){
      setCount(count - 1);
    }   
  }

  useEffect(() => {
    if(btnRef.current){
      setTimeout(()=>{
        btnRef.current.style.display = 'none'
      },3000);
    }
}, [])


  return (
    <div className='d-flex flex-column'>
      
      This is Contact Page

      <h2 className=''>count : <strong>{count}</strong></h2>
       <button onClick={handleClick} className='btn btn-primary w-25 '> Increment</button>
       <button ref={btnRef} onClick={handleDecrement} className='btn btn-warning mt-2 w-25'>Decrement</button>
      
    </div>
  )
}

export default Contact