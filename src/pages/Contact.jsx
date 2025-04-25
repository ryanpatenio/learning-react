
import { useState, useRef, useEffect, useLayoutEffect, useMemo, useCallback } from 'react'

const Contact = () => {
  const [count, setCount] = useState(0);
  const btnRef = useRef(null);
  const [count2, setCount2] = useState(0);

  const handleClick = () => {
    setCount(count + 1)
  }
  
  const handleDecrement = () => {
    if(count > 0){
      setCount(count - 1);
    }   
  }

  const test = useCallback(() =>{
    console.log("test")
  },[]);

  //without use of useCallback function every action happen it will render again
  const compute = () => {
    console.log("compute: Computing");
    test();
    return 100;
  }

 const memoizeCompute = useMemo(() =>{
  test()
    console.log("memoize Computing");
    return 100;
 },[test]);

  return (
    <div className='d-flex flex-column'>
      
      This is Contact Page

      <h2 className=''>count : <strong>{count}</strong></h2>
       <h3>{compute()}</h3>
       <h2>{memoizeCompute}</h2>
       <button onClick={handleClick} className='btn btn-primary w-25 '> Increment</button>
       {/* <button onClick={handleClick2} className='btn btn-primary w-25 mt-2'> Increment UseEffect</button> */}
       <button onClick={handleDecrement} className='btn btn-warning mt-2 w-25'>Decrement</button>
      
    </div>
  )
}

export default Contact