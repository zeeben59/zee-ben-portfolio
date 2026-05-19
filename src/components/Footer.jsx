import { motion } from 'framer-motion'
import {
  RiGithubLine, RiLinkedinLine, RiTwitterXLine,
  RiArrowUpLine, RiCodeSSlashLine,
} from 'react-icons/ri'

const SOCIALS = [
  { icon: RiGithubLine,   href: 'https://github.com/',   label: 'GitHub'   },
  { icon: RiLinkedinLine, href: 'https://linkedin.com/', label: 'LinkedIn' },
  { icon: RiTwitterXLine, href: 'https://x.com/',        label: 'Twitter'  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <RiCodeSSlashLine className="text-dark-900 text-base" />
          </div>
          <span className="font-mono font-bold gradient-text">Monwuba Benedict Okechukwu</span>
        </div>

        {/* Contact + Copyright */}
        <div className="text-center">
          <p className="text-white/40 text-sm">Email: <a href="mailto:monwubabenedict07@gmail.com" className="text-white/70 hover:text-primary">monwubabenedict07@gmail.com</a></p>
          <p className="text-white/40 text-sm">WhatsApp: <a href="https://wa.me/2347066313789" className="text-white/70 hover:text-primary">+234 706 631 3789</a></p>
          <p className="text-white/40 text-sm mt-2">© {new Date().getFullYear()} Monwuba Benedict Okechukwu. Built with ❤️ in Nigeria.</p>
        </div>

        {/* Socials + Back to top */}
        <div className="flex items-center gap-4">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.2, y: -2 }}
              className="w-9 h-9 rounded-full glass flex items-center justify-center text-white/50 hover:text-primary transition-colors"
            >
              <Icon className="text-lg" />
            </motion.a>
          ))}

          {/* Back to top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-dark-900 shadow-lg shadow-primary/30"
            aria-label="Back to top"
          >
            <RiArrowUpLine className="text-lg" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
