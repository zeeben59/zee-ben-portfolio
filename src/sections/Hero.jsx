import { RiGithubLine, RiLinkedinLine, RiTwitterXLine } from 'react-icons/ri'
import { useTypingAnimation } from '../hooks/useScrollAnimation'

const TYPING_WORDS = [
  'Full Stack Developer',
  'AI Enthusiast',
  'React Specialist',
  'Node.js Engineer',
  'Problem Solver',
]

const SOCIALS = [
  { icon: RiGithubLine, href: 'https://github.com/', label: 'GitHub' },
  { icon: RiLinkedinLine, href: 'https://linkedin.com/', label: 'LinkedIn' },
  { icon: RiTwitterXLine, href: 'https://x.com/', label: 'Twitter' },
]

export default function Hero() {
  const typed = useTypingAnimation(TYPING_WORDS, 80, 2200)

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Unified responsive hero: stacks on mobile and shows two-column on wider screens */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          {/* Left text column */}
          <div className="order-2 sm:order-1">
            <p className="text-sm text-gray-400 mb-2">Hi, I&apos;m Monwuba Benedict Okechukwu!</p>
            <h2 className="text-4xl sm:text-5xl font-semibold mb-4">WEB <span className="gradient-text">DESIGNER</span></h2>
            <p className="text-primary/80 text-sm mb-3 font-mono">{typed}</p>
            <p className="text-gray-400 max-w-xl leading-relaxed mb-6">
              I craft visually stunning and user-friendly websites. With a keen eye for design and modern web development, I transform ideas into beautiful digital experiences.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button className="btn-primary">Projects</button>
              <button className="btn-outline">Hire Me</button>
            </div>

            <div className="mt-6 flex gap-4 text-gray-400">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right visual (profile) */}
          <div className="order-1 sm:order-2 flex items-center justify-center">
            <div className="w-56 h-56 sm:w-[420px] sm:h-[520px] rounded-full sm:rounded-[36px] overflow-hidden profile-img-desktop profile-img shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
