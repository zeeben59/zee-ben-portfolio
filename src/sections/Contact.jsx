import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
  RiSendPlaneLine, RiMailLine, RiWhatsappLine, RiMapPinLine,
  RiGithubLine, RiLinkedinLine, RiTwitterXLine, RiLoader4Line,
} from 'react-icons/ri'
import { EMAILJS_CONFIG } from '../emailjs'

const CONTACT_INFO = [
  { icon: RiMailLine,    label: 'Email',    value: 'monwubabenedict07@gmail.com',   href: 'mailto:monwubabenedict07@gmail.com'      },
  { icon: RiWhatsappLine,label: 'WhatsApp', value: '+234 706 631 3789',           href: 'https://wa.me/2347066313789'         },
  { icon: RiMapPinLine,  label: 'Location', value: 'Nigeria, West Africa',        href: null                                   },
]
const SOCIALS = [
  { icon: RiGithubLine,   href: 'https://github.com/',   label: 'GitHub'   },
  { icon: RiLinkedinLine, href: 'https://linkedin.com/', label: 'LinkedIn' },
  { icon: RiTwitterXLine, href: 'https://x.com/',        label: 'Twitter'  },
]

const INIT = { name: '', email: '', message: '' }
const ERRORS_INIT = { name: '', email: '', message: '' }

export default function Contact({ addToast }) {
  const formRef = useRef(null)
  const [form, setForm] = useState(INIT)
  const [errors, setErrors] = useState(ERRORS_INIT)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e = { ...ERRORS_INIT }
    if (!form.name.trim() || form.name.trim().length < 2) e.name = 'Name must be at least 2 characters.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email.'
    if (!form.message.trim() || form.message.trim().length < 10) e.message = 'Message must be at least 10 characters.'
    setErrors(e)
    return !Object.values(e).some(Boolean)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    try {
      // Quick config check
      if (!EMAILJS_CONFIG.PUBLIC_KEY || EMAILJS_CONFIG.PUBLIC_KEY.includes('YOUR')) {
        throw new Error('EmailJS public key not configured. Please set EMAILJS_CONFIG.PUBLIC_KEY in src/emailjs.js')
      }
      await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current,
        EMAILJS_CONFIG.PUBLIC_KEY,
      )
      addToast({ type: 'success', message: "Message sent! I'll reply within 24 hours ✅" })
      setForm(INIT)
    } catch (err) {
      // Log full error to console for debugging and show user-friendly message
      // eslint-disable-next-line no-console
      console.error('EmailJS send error:', err)
      addToast({ type: 'error', message: 'Failed to send. Check console for details and ensure EmailJS keys are configured.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="absolute inset-0 cyber-grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-widest uppercase">Get in touch</span>
          <h2 className="section-heading mt-2">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mt-4">
            Have a project in mind? I'd love to hear about it. Send me a message and let's make something great.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {CONTACT_INFO.map(item => (
              <div key={item.label} className="glass rounded-2xl p-5 flex items-start gap-4 card-hover">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-xl flex-shrink-0">
                  <item.icon />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-1 font-mono uppercase tracking-wide">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-white/80 hover:text-primary transition-colors font-medium">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white/80 font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/2347066313789"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] font-semibold hover:bg-[#25D366]/25 transition-all duration-300 group"
            >
              <RiWhatsappLine className="text-2xl group-hover:scale-110 transition-transform" />
              Chat on WhatsApp
            </a>

            {/* Socials */}
            <div className="flex gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="flex-1 flex items-center justify-center py-3 glass rounded-xl text-white/50 hover:text-primary transition-colors text-xl"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>

            {/* Availability badge */}
            <div className="glass rounded-2xl p-5 border border-accent/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm">Currently Available</span>
              </div>
              <p className="text-white/50 text-sm">
                Open to full-time, contract, and freelance projects. Typical response time: &lt;24 hours.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form ref={formRef} onSubmit={handleSubmit} noValidate className="glass rounded-3xl p-8 space-y-6">
              <h3 className="font-bold text-2xl mb-2">Send a Message</h3>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Your Name *</label>
                <input
                  type="text"
                  name="from_name"
                  value={form.name}
                  onChange={(e) => handleChange({ target: { name: 'name', value: e.target.value } })}
                  placeholder="Chukwuemeka Obi"
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-white/25 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                    errors.name ? 'border-red-500/60' : 'border-white/10 focus:border-primary/50'
                  }`}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="from_email"
                  value={form.email}
                  onChange={(e) => handleChange({ target: { name: 'email', value: e.target.value } })}
                  placeholder="you@example.com"
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-white/25 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                    errors.email ? 'border-red-500/60' : 'border-white/10 focus:border-primary/50'
                  }`}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={(e) => handleChange({ target: { name: 'message', value: e.target.value } })}
                  rows={6}
                  placeholder="Tell me about your project, goals, or any questions you have..."
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-white/25 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none ${
                    errors.message ? 'border-red-500/60' : 'border-white/10 focus:border-primary/50'
                  }`}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={!loading ? { scale: 1.02 } : {}}
                whileTap={!loading ? { scale: 0.98 } : {}}
                className={`w-full py-4 rounded-xl font-semibold text-dark-900 flex items-center justify-center gap-3 transition-all duration-300 ${
                  loading
                    ? 'bg-white/20 cursor-not-allowed text-white/60'
                    : 'bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/30 hover:shadow-primary/50'
                }`}
              >
                {loading ? (
                  <>
                    <RiLoader4Line className="animate-spin text-xl" />
                    Sending…
                  </>
                ) : (
                  <>
                    <RiSendPlaneLine className="text-xl" />
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="text-white/30 text-xs text-center">
                Your data is never shared. Powered by EmailJS.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
