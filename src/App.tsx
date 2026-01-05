import { Route, Routes } from 'react-router-dom'
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
    <main>
      <SidecarText />
      <header>
        <Navigation />
      </header>
      <section>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="partners" element={<Partners />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<SolutionsSection />} />
          <Route path="contact" element={<ContactUs />} />
        </Routes>
      </section>
      <footer>
        <p><strong>Prague - <span className="company-name">Sidecar s.r.o.</span></strong></p>
        <p><a href="https://maps.app.goo.gl/N7UrS5XTEyWN1PZf6" target="_blank" rel="noopener noreferrer">Slovinska 15, 101 00 Praha 10</a></p>
        <p>Czech Republic</p>
        <p><a href="tel:+420 725 945 383">+420 725 945 383</a></p>
        <p>© {new Date().getFullYear()} <span className="company-name">Sidecar s.r.o.</span> All Rights Reserved.</p>
      </footer>
    </main>
  )
}

export default App
