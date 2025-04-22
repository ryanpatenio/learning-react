import React from 'react'
import Footer from '../Partials/Footer'
import NavBar from '../Partials/NavBar'
import Header from '../Partials/Header'

const RootLayout = ({children}) => {
  return (
    <div className='main-root'>
       <NavBar />
            {children}
        <Footer />
    </div>
  )
}

export default RootLayout