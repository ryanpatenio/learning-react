import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
        <div className='container-lg'>
            <div className='d-flex flex-column justify-content-center align-items-center min-vh-100'>
                <h2>404 Not Found!</h2>
                <br />
                <Link to="/">Go back to Home Page</Link>
            </div>
        </div>
    </>
    
  )
}

export default NotFound