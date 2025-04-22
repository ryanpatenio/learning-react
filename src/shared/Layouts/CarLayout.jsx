import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Partials/NavBar'

const CarLayout = () => {
  return (
    <div>
        <div>This is Header in Header Layout</div>
            <Outlet />
        <div>This is Footer in Car Layout</div>
    </div>
    
  )
}

export default CarLayout