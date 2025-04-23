import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Contact = () => {
  const {test} = useOutletContext();
  return (
    <div>This is Contact Page {test}</div>
  )
}

export default Contact