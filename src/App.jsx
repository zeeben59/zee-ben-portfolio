import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'

// Layout
import Navbar           from './components/Navbar.jsx'
import ScrollProgress   from './components/ScrollProgress.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'
import Toast            from './components/Toast.jsx'
import PageLoader       from './components/PageLoader.jsx'
import Footer           from './components/Footer.jsx'

// Sections
import Hero         from './sections/Hero.jsx'
import About        from './sections/About.jsx'
import Skills       from './sections/Skills.jsx'
import Services     from './sections/Services.jsx'
import Projects     from './sections/Projects.jsx'
import Testimonials from './sections/Testimonials.jsx'
import Contact      from './sections/Contact.jsx'

let toastId = 0

export default function App() {
  const [loading,  setLoading]  = useState(true)
  const [darkMode, setDarkMode] = useState(true)
  const [toasts,   setToasts]   = useState([])

  // Initial loader
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(t)
  }, [])

  // Sync dark class
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    document.documentElement.classList.toggle('light', !darkMode)
  }, [darkMode])

  const addToast = useCallback((toast) => {
    const id = ++toastId
    setToasts(ts => [...ts, { ...toast, id }])
    setTimeout(() => setToasts(ts => ts.filter(t => t.id !== id)), 3200)
  }, [])

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-dark-900 text-white' : 'bg-light-800 text-dark-900'} transition-colors duration-500`}>

      {/* Page loader */}
      <AnimatePresence>
        {loading && <PageLoader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <ScrollProgress />
          <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(d => !d)} />

          <main>
            <Hero />
            <About />
            <Skills />
            <Services />
            <Projects />
            <Testimonials />
            <Contact addToast={addToast} />
          </main>

          <Footer />
          <FloatingWhatsApp />
          <Toast toasts={toasts} />
        </>
      )}
    </div>
  )
}
