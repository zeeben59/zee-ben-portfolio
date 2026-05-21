import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  RiGithubLine, RiExternalLinkLine, RiCodeSSlashLine,
} from 'react-icons/ri'

const PROJECTS = [
  {
    id: 1,
    title: 'The Nail Tech — Membership Platform',
    category: 'Web Design',
    desc:
      'A membership and course platform for nail technicians featuring events, accredited courses, a shop, and member resources. Responsive design with e-commerce and content-focused UX.',
    image: null,
    color: '#0EA5A4',
    tech: ['WordPress', 'WooCommerce', 'PHP', 'Responsive Design'],
    live: 'https://thenailtech.org',
    github: '#',
    featured: true,
  },
  {
    id: 7,
    title: 'Kaspersky — Corporate Site',
    category: 'Web Design',
    desc:
      'Corporate site and resource center for antivirus & cybersecurity products. Marketing pages, resources, and product listings.',
    image: '/kaspersky.jpg',
    color: '#0EA5A4',
    tech: ['Marketing Site', 'CMS', 'Responsive Design'],
    live: 'https://www.kaspersky.com/',
    github: '#',
    featured: true,
  },
  {
    id: 8,
    title: 'DeepL — Translator Platform',
    category: 'Web App',
    desc:
      'DeepL is a leading translation platform offering fast, accurate machine translation and related tools for individuals and businesses.',
    image: '/deepl.jpg',
    color: '#2563EB',
    tech: ['Web App', 'Translation API', 'SaaS'],
    live: 'https://www.deepl.com/',
    github: '#',
    featured: true,
  },
]

const FILTERS = ['All', 'Web Design', 'Web App']

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const visible = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-mono text-primary text-sm tracking-widest uppercase">What I&apos;ve built</span>
          <h2 className="section-heading mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mt-4">
            A selection of real-world projects I&apos;ve designed, built, and shipped.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === f
                  ? 'bg-gradient-to-r from-primary to-accent text-dark-900 shadow-lg shadow-primary/30'
                  : 'glass text-white/60 hover:text-primary hover:border-primary/30'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {visible.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className="glass rounded-3xl overflow-hidden border border-white/5 hover:border-primary/20 transition-all duration-300 group"
              >
                {/* Project image placeholder */}
                <div
                  className="h-48 relative overflow-hidden flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)` }}
                >
                  {/* show thumbnail if provided */}
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                  ) : (
                    <>
                      <div className="absolute inset-0 cyber-grid-bg opacity-30" />
                      <div className="relative text-center">
                        <RiCodeSSlashLine className="text-6xl mx-auto mb-2" style={{ color: project.color }} />
                        <span
                          className="text-xs font-mono px-3 py-1 rounded-full border"
                          style={{ color: project.color, borderColor: `${project.color}40` }}
                        >
                          {project.category}
                        </span>
                      </div>
                    </>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/50 rounded-xl text-primary text-sm font-medium hover:bg-primary/30 transition-colors"
                    >
                      <RiExternalLinkLine /> Live
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 glass border border-white/20 rounded-xl text-white/80 text-sm font-medium hover:text-white transition-colors"
                    >
                      <RiGithubLine /> Code
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-5 line-clamp-3">
                    {project.desc}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map(t => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded-md font-mono"
                        style={{ background: `${project.color}12`, color: project.color }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-primary/20 to-accent/10 border border-primary/30 text-primary hover:from-primary/30 transition-all"
                    >
                      <RiExternalLinkLine /> Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-sm font-medium glass border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-all"
                    >
                      <RiGithubLine /> GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
