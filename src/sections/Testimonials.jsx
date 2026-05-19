import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RiStarFill, RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri'

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Chukwuemeka Obi',
    role: 'CEO, NaijaStore',
    initials: 'CO',
    color: '#00D4FF',
    rating: 5,
    text: "Monwuba Benedict Okechukwu delivered our e-commerce platform ahead of schedule and above expectations. His React expertise and attention to UX details turned our rough idea into a product our customers genuinely love. Very talented developer.",
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    role: 'Founder, EduTech Ltd (UK)',
    initials: 'SM',
    color: '#00FF88',
    rating: 5,
    text: "Hiring Monwuba Benedict Okechukwu to build our AI chatbot was the best decision we made. He understood exactly what we needed and integrated GPT-4 in a way that felt natural and human. Delivered excellent work on time and on budget.",
  },
  {
    id: 3,
    name: 'Adewale Adeyemi',
    role: 'CTO, FinServNG',
    initials: 'AA',
    color: '#A855F7',
    rating: 5,
    text: "Strong full-stack skills and a solid understanding of security best practices. Monwuba Benedict Okechukwu rebuilt our legacy PHP system into a modern Node.js + React stack — it now handles 10x our original traffic with ease.",
  },
  {
    id: 4,
    name: 'Priya Sharma',
    role: 'Product Manager, LogiTech',
    initials: 'PS',
    color: '#F59E0B',
    rating: 5,
    text: "Monwuba Benedict Okechukwu is the kind of developer who asks the right questions before writing a single line of code. His API integration work was flawless and his documentation made it easy for our team to maintain going forward.",
  },
  {
    id: 5,
    name: 'Olumide Fashola',
    role: 'Co-founder, GrowHub Africa',
    initials: 'OF',
    color: '#EC4899',
    rating: 5,
    text: "We've worked with many developers across Africa and Monwuba Benedict Okechukwu stands out for his professionalism, speed, and code quality. He doesn't just build what you ask — he improves it. Highly recommended for any serious project.",
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const prev = () => setIndex(i => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = useCallback(() => setIndex(i => (i + 1) % TESTIMONIALS.length), [])

  // Auto-scroll
  useEffect(() => {
    if (paused) return
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [paused, next])

  const current = TESTIMONIALS[index]

  return (
    <section id="testimonials" className="py-24 px-4 relative overflow-hidden">
      {/* Blob bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob absolute top-0 right-0 w-96 h-96 bg-accent opacity-5" />
        <div className="blob absolute bottom-0 left-0 w-64 h-64 bg-primary opacity-5" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-widest uppercase">Client love</span>
          <h2 className="section-heading mt-2">
            What People <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        {/* Slider */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.96 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
            >
              {/* Quote mark */}
              <div className="absolute top-6 left-8 text-8xl font-serif leading-none text-primary/10 select-none">"</div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <RiStarFill key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/75 text-lg md:text-xl leading-relaxed italic mb-8 relative z-10 max-w-2xl mx-auto">
                "{current.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-dark-900 font-bold text-lg flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${current.color}, ${current.color}99)` }}
                >
                  {current.initials}
                </div>
                <div className="text-left">
                  <p className="font-bold text-white">{current.name}</p>
                  <p className="text-white/50 text-sm">{current.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full glass border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary/40 transition-all"
            >
              <RiArrowLeftLine />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === index ? 'w-8 h-2 bg-primary' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full glass border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary/40 transition-all"
            >
              <RiArrowRightLine />
            </button>
          </div>
        </div>

        {/* Mini cards row */}
        <div className="hidden md:flex justify-center gap-4 mt-12">
          {TESTIMONIALS.map((t, i) => (
            <motion.button
              key={t.id}
              onClick={() => setIndex(i)}
              whileHover={{ scale: 1.05 }}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl glass border transition-all duration-300 ${
                i === index ? 'border-primary/50 shadow-lg shadow-primary/10' : 'border-white/5 opacity-50'
              }`}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-dark-900 font-bold text-xs flex-shrink-0"
                style={{ background: t.color }}
              >
                {t.initials}
              </div>
              <span className="text-xs font-medium text-white/70 max-w-[80px] leading-tight text-left">
                {t.name.split(' ')[0]}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
