import {Route, Routes } from 'react-router'
import './App.css'
import Partners from './pages/partners'
import HomePage from './pages/home'
import Navigation from './components/Navigation'
import SidecarText from './components/sidecar_text'
import About from './pages/about'
import ContactUs from './pages/contact'
import SolutionsSection from './pages/services'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <main className="App flex flex-col min-h-screen">
      <div><Toaster /></div>
      <SidecarText />
      <header className="flex flex-col items-center flex-grow">
        <div className="p-4 w-full">
          <Navigation />
        </div>
      </header>
      <section>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="partners" element={<Partners />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<SolutionsSection />} />
          <Route path="contact_us" element={<ContactUs />} />
        </Routes>
      </section>
      <footer>
        <p><strong>Prague - Sidecar s.r.o.</strong></p>
        <p>Slovinska 15, 101 00 Praha 10</p>
        <p>Czech Republic</p>
        <p><a href="tel:+420 725 945 383">+420 725 945 383</a></p>
        <p>© 2024 Sidecar s.r.o. All Rights Reserved.</p>
      </footer>
    </main>
  )
}

export default App
