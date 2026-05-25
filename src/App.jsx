import { lazy, Suspense, useState, useEffect, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'

import Navbar from './components/Navbar.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'
import Toast from './components/Toast.jsx'
import PageLoader from './components/PageLoader.jsx'
import Footer from './components/Footer.jsx'
import Seo from './components/Seo.jsx'

const Hero = lazy(() => import('./sections/Hero.jsx'))
const About = lazy(() => import('./sections/About.jsx'))
const Skills = lazy(() => import('./sections/Skills.jsx'))
const Services = lazy(() => import('./sections/Services.jsx'))
const Projects = lazy(() => import('./sections/Projects.jsx'))
const Testimonials = lazy(() => import('./sections/Testimonials.jsx'))
const Contact = lazy(() => import('./sections/Contact.jsx'))

let toastId = 0

export default function App() {
  const [loading, setLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(true)
  const [toasts, setToasts] = useState([])

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    document.documentElement.classList.toggle('light', !darkMode)
  }, [darkMode])

  const addToast = useCallback((toast) => {
    const id = ++toastId
    setToasts((ts) => [...ts, { ...toast, id }])
    setTimeout(() => setToasts((ts) => ts.filter((t) => t.id !== id)), 3200)
  }, [])

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-dark-900 text-white' : 'bg-light-800 text-dark-900'} transition-colors duration-500`}>
      <Seo />

      <AnimatePresence>
        {loading && <PageLoader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <ScrollProgress />
          <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode((d) => !d)} />

          <main id="main-content" tabIndex="-1">
            <Suspense fallback={null}>
              <Hero />
              <About />
              <Skills />
              <Services />
              <Projects />
              <Testimonials />
              <Contact addToast={addToast} />
            </Suspense>
          </main>

          <Footer />
          <FloatingWhatsApp />
          <Toast toasts={toasts} />
        </>
      )}
    </div>
  )
}
