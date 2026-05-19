import { useEffect, useRef, useState } from 'react'

// Triggers animation when element enters viewport
export const useScrollAnimation = (threshold = 0.15) => {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}

// Tracks scroll progress 0–1
export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return progress
}

// Typing animation hook
export const useTypingAnimation = (words, speed = 80, pause = 2000) => {
  const [displayText, setDisplayText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!words?.length) return
    const current = words[wordIndex]
    const delay = isDeleting ? speed / 2 : charIndex === current.length ? pause : speed

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < current.length) {
        setDisplayText(current.substring(0, charIndex + 1))
        setCharIndex(c => c + 1)
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(current.substring(0, charIndex - 1))
        setCharIndex(c => c - 1)
      } else if (!isDeleting && charIndex === current.length) {
        setIsDeleting(true)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setWordIndex(i => (i + 1) % words.length)
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [words, wordIndex, charIndex, isDeleting, speed, pause])

  return displayText
}

// Counter animation
export const useCounter = (target, duration = 2000, start = false) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    const step = target / (duration / 16)
    let current = 0
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, start])

  return count
}
