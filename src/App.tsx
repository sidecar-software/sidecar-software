import {Route, Routes } from 'react-router'
import './App.css'
import Partners from './pages/partners'
import Services from './pages/services'
import HomePage from './pages/home'
import Navigation from './components/Navigation'
import SidecarText from './components/sidecar_text'
import About from './pages/about'
import ContactUs from './pages/contact'

function App() {

  return (
    <div className="App flex flex-col min-h-screen">
      <SidecarText />
      <div className="flex flex-col items-center flex-grow">
        <div className="p-4 w-full">
          <Navigation />
        </div>
        <div className="p-4 w-full flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="partners" element={<Partners />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact_us" element={<ContactUs />} />
          </Routes>
        </div>
      </div>
      <div className="p-4 w-full footer">
        © 2024 Sidecar s.r.o. All Rights Reserved.
      </div>
    </div>
  )
}

export default App
