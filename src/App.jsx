import RootLayout from "./shared/Layouts/RootLayout"
import CarLayout from "./shared/Layouts/CarLayout"
import { Routes, Route } from "react-router-dom"

import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import CarsPage from './pages/Cars'
import CarPage from './pages/CarDetails'
import NotFoundPage from "./pages/NotFound"


const App = () => {
  return (  
     <Routes>
        <Route element={<RootLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/Cars" element={<CarsPage />} />
              <Route element={<CarLayout />}>
                  <Route path="/Cars/:id" element={<CarPage />} />
              </Route>           
            <Route path="/Contact" element={<ContactPage />} /> 
        </Route> 
      <Route path="*" element={<NotFoundPage />} />
    </Routes>       
  )
}

export default App
