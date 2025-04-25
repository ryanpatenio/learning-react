import React, { useState } from 'react'
import Header from '../components/About/About'


const About = () => {
   const [count, setCount] = useState(0);
   console.log(count)

   const handleClick = () => {
     setCount(count + 1);
   }

  return (
    <div>
      <Header count={count} />
      <h2>count : {count}</h2>
      <button className='btn btn-warning' onClick={handleClick}>click</button>
    </div>
  )
}

export default About