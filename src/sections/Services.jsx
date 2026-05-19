import { motion } from 'framer-motion'
import {
  RiGlobalLine, RiRobotLine, RiShoppingCartLine,
  RiPenNibLine, RiPlugLine,
} from 'react-icons/ri'

const SERVICES = [
  {
    icon: RiGlobalLine,
    title: 'Website Development',
    color: '#00D4FF',
    desc:
      'End-to-end web applications built with React, Node.js, and modern best practices. Fast, accessible, and SEO-optimised.',
    features: ['React / Next.js', 'RESTful APIs', 'Performance-first', 'Responsive design'],
  },
  {
    icon: RiRobotLine,
    title: 'AI Chatbot Development',
    color: '#00FF88',
    desc:
      'Intelligent chatbots powered by GPT-4, LangChain, and custom training. Integrate on WhatsApp, web, or your own platform.',
    features: ['GPT-4 / Claude APIs', 'WhatsApp integration', 'Custom training', 'Analytics dashboard'],
  },
  {
    icon: RiShoppingCartLine,
    title: 'E-commerce Development',
    color: '#FF6B6B',
    desc:
      'Scalable online stores with full payment integration, inventory management, and a seamless checkout experience.',
    features: ['Payment gateways', 'Inventory system', 'Admin dashboard', 'Mobile-optimised'],
  },
  {
    icon: RiPenNibLine,
    title: 'UI/UX Design',
    color: '#A855F7',
    desc:
      'Clean, intuitive interfaces that convert visitors into customers. Prototyping in Figma before a single line of code.',
    features: ['Figma prototyping', 'Design systems', 'User research', 'Accessibility'],
  },
  {
    icon: RiPlugLine,
    title: 'API Integration',
    color: '#F59E0B',
    desc:
      'Seamlessly connect third-party services — payment processors, CRMs, analytics tools — into your existing stack.',
    features: ['Payment APIs', 'SMS / Email APIs', 'OAuth flows', 'Webhook handling'],
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 relative">
      <div className="absolute inset-0 cyber-grid-bg opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-widest uppercase">What I offer</span>
          <h2 className="section-heading mt-2">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mt-4">
            From concept to deployment — I deliver complete, production-ready solutions tailored to your needs.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="glass rounded-3xl p-7 border border-white/5 hover:border-primary/20 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 30% 30%, ${service.color}08 0%, transparent 70%)` }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${service.color}15`, color: service.color }}
              >
                <service.icon />
              </div>

              <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-5">{service.desc}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/50">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: service.color }} />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
