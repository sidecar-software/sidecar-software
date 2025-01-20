import {Route, Routes } from 'react-router'
import './App.css'
import Partners from './pages/partners'
import HomePage from './pages/home'
import Navigation from './components/Navigation'
import SidecarText from './components/sidecar_text'
import About from './pages/about'
import ContactUs from './pages/contact'
import SolutionsSection from './pages/services'

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <SidecarText />
      <div className="flex flex-col items-center flex-grow">
        <div className="p-4 w-full">
          <Navigation />
        </div>
        <div className="p-4 w-full flex-grow mt-14">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="partners" element={<Partners />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<SolutionsSection />} />
            <Route path="contact_us" element={<ContactUs />} />
          </Routes>
        </div>
      </div>
      <div className="p-4 w-full">
        <div className='flex justify-self-start space-x-4'>
          Prague - Sidecar s.r.o.<br />
          Slovinska 15, 101 00 Praha 10<br />
          Czech Republic<br />
          +420 725 945 383<br />
        </div>

        <hr />
        © 2024 Sidecar s.r.o. All Rights Reserved.<br />
      </div>
    </div>
  )
}

export default App
