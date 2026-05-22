import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl md:text-4xl font-bold text-center md:text-left">
          About Me
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              I’m Monwuba Benedict Okechukwu, a Full Stack Web Developer and AI enthusiast passionate about building modern web applications and smart digital solutions. I specialize in React.js, JavaScript, PHP, Node.js, and responsive frontend development.
            </p>

            <p className="mt-4 text-white/70 text-base md:text-lg leading-relaxed">
              I love creating clean, scalable, and user-focused experiences — from business websites and e-commerce systems to AI-powered platforms and automation tools. My goal is to combine creativity with technology to build impactful solutions that solve real problems.
            </p>
          </div>

          <div className="flex items-center justify-center md:justify-end">
            <div className="relative w-[250px] h-[300px] sm:w-[310px] sm:h-[370px] md:w-[320px] md:h-[390px] lg:w-[360px] lg:h-[440px] rounded-[28px] sm:rounded-[34px] overflow-hidden border border-primary/25 bg-gradient-to-br from-white/10 via-white/5 to-transparent shadow-2xl shadow-primary/20">
              <img
                src="/download.jpg"
                alt="Monwuba Benedict Okechukwu"
                className="w-full h-full object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[28px] sm:rounded-[34px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
