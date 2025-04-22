import RootLayout from "./shared/Layouts/RootLayout"
import { Routes, Route } from "react-router-dom"

import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'


const App = () => {
  return (
    <>
   <RootLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>   
   </RootLayout>     
    </>
  )
}

export default App
