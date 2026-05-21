import { motion } from 'framer-motion'
import {
  RiReactjsLine, RiJavascriptLine, RiHtml5Line,
  RiGithubLine, RiPhpFill,
} from 'react-icons/ri'
import {
  SiNodedotjs, SiMysql, SiOpenai,
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'

const SKILLS = [
  { icon: RiReactjsLine,  name: 'React.js',     level: 90, color: '#61DAFB', bg: 'rgba(97,218,251,0.08)',  desc: 'Hooks, Context, Redux, Next.js'             },
  { icon: RiJavascriptLine, name: 'JavaScript', level: 88, color: '#F7DF1E', bg: 'rgba(247,223,30,0.08)', desc: 'ES2024+, TypeScript, DOM APIs'               },
  { icon: RiPhpFill,      name: 'PHP',           level: 80, color: '#8993BE', bg: 'rgba(137,147,190,0.08)',desc: 'Laravel, WordPress, Custom backends'          },
  { icon: SiNodedotjs,    name: 'Node.js',       level: 82, color: '#68A063', bg: 'rgba(104,160,99,0.08)', desc: 'Express, Fastify, REST & GraphQL APIs'        },
  { icon: SiMysql,        name: 'MySQL',         level: 78, color: '#00758F', bg: 'rgba(0,117,143,0.08)',  desc: 'Complex queries, indexing, optimization'      },
  { icon: RiHtml5Line,    name: 'HTML & CSS',    level: 95, color: '#E34F26', bg: 'rgba(227,79,38,0.08)',  desc: 'Semantic HTML5, CSS3, Tailwind, animations'   },
  { icon: TbApi,          name: 'REST APIs',     level: 85, color: '#00D4FF', bg: 'rgba(0,212,255,0.08)',  desc: 'Design, documentation, integration'           },
  { icon: RiGithubLine,   name: 'Git & GitHub',  level: 88, color: '#F0F0F0', bg: 'rgba(240,240,240,0.06)',desc: 'Version control, CI/CD, collaboration'        },
  { icon: SiOpenai,       name: 'AI Integration',level: 75, color: '#00FF88', bg: 'rgba(0,255,136,0.08)',  desc: 'OpenAI, LangChain, AI agents, chatbots'       },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const cardAnim = {
  hidden:  { opacity: 0, y: 30, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/3 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-widest uppercase">What I work with</span>
          <h2 className="section-heading mt-2">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mt-4">
            A curated set of technologies I use to bring ideas to life — from frontend to backend and AI.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.name}
              variants={cardAnim}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass rounded-2xl p-6 border border-white/5 hover:border-primary/20 transition-all duration-300 group cursor-default"
              style={{ background: skill.bg }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${skill.color}15`, color: skill.color }}
                >
                  <skill.icon />
                </div>
                <div>
                  <h3 className="font-bold text-white/90">{skill.name}</h3>
                  <span className="font-mono text-xs" style={{ color: skill.color }}>
                    {skill.level}% proficiency
                  </span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden mb-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${skill.color}50, ${skill.color})` }}
                />
              </div>

              <p className="text-white/40 text-sm">{skill.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
