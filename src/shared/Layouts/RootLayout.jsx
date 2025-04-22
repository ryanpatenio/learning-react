import React from 'react'
import Header from '../Partials/Header'
import Footer from '../Partials/Footer'

const RootLayout = ({children}) => {
  return (
    <div className='main-root'>
        <Header />
            {children}
        <Footer />
    </div>
  )
}

export default RootLayout