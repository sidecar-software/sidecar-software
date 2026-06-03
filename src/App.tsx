import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Partners from './pages/partners'
import HomePage from './pages/home'
import Navigation from './components/Navigation'
import SidecarText from './components/sidecar_text'
import About from './pages/about'
import ContactUs from './pages/contact'
import SolutionsSection from './pages/services'
import Blog from './pages/blog'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <main>
      <ScrollToTop />
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
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<ContactUs />} />
        </Routes>
      </section>
      <footer>
        <div className="footer_top">
          <p className="footer_catchphrase">Open to every<br />search challenge.</p>

          <div className="footer_cols_row">
            <div className="footer_col">
              <h4>Navigate</h4>
              <nav>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/partners">Partners</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
              </nav>
            </div>

            <div className="footer_col">
              <h4>Find us</h4>
              <a href="https://maps.app.goo.gl/N7UrS5XTEyWN1PZf6" target="_blank" rel="noopener noreferrer">
                Slovinska 15<br />101 00 Praha 10<br />Czech Republic
              </a>
              <a href="tel:+420725945383" className="footer_phone">+420 725 945 383</a>
            </div>
          </div>
        </div>

        <div className="footer_bottom">
          <span>© {new Date().getFullYear()} <span className="company-name">Sidecar s.r.o.</span> All Rights Reserved.</span>
        </div>
      </footer>
    </main>
  )
}

export default App
