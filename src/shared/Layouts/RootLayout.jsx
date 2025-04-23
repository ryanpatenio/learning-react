import React from 'react'
import Footer from '../Partials/Footer'
import NavBar from '../Partials/NavBar'
import Header from '../Partials/Header'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='main-root'>
       <NavBar />
            <Outlet context={{test : "Lala"}} />
        <Footer />
    </div>
  )
}

export default RootLayout