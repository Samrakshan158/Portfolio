import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Navbar from './components/navbar.jsx'
import Hero from './components/hero.jsx'
import Project from './components/project.jsx'
import Education from './components/education.jsx'
import Footer from './components/footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Project />
    <Education />
    <Footer />
  </StrictMode>,
)
