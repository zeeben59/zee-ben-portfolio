import { motion } from 'framer-motion';

import profileImg from '../assets/profile.png';

const About = () => {
  return (
    <section id="about" className="section-padding max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-outfit">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="space-y-6 text-dark-muted text-lg leading-relaxed font-light">
            <p>
              I'm Monwuba Benedict Okechukwu, also known as <span className="text-white font-medium">Zee Ben</span>.
              As a dedicated Web Developer, I specialize in building high-performance applications that solve real-world problems.
            </p>
            <p>
              My focus is on <span className="text-white font-medium">Business-Focused Development</span>. I don't just write code; I build systems that help businesses like hotels, crypto platforms, and startups thrive in the digital landscape.
            </p>
            <p>
              Whether it's a real-time crypto trading platform, an AI-powered chatbot, or a complex management system, I bring a methodical approach to every project, ensuring scalability, security, and a premium user experience.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 sm:gap-12">
            <div>
              <h3 className="text-4xl font-bold text-white mb-1 font-outfit tracking-tighter">50+</h3>
              <p className="text-dark-muted uppercase text-xs tracking-[0.2em]">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-white mb-1 font-outfit tracking-tighter">5+</h3>
              <p className="text-dark-muted uppercase text-xs tracking-[0.2em]">Years Experience</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-white mb-1 font-outfit tracking-tighter">100%</h3>
              <p className="text-dark-muted uppercase text-xs tracking-[0.2em]">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 relative w-full"
        >
          <div className="relative z-10 w-full aspect-[4/5] max-w-[400px] mx-auto overflow-hidden rounded-3xl border border-white/10 glass-card p-4 group">
            <div className="w-full h-full overflow-hidden rounded-2xl relative">
              <img 
                src={profileImg} 
                alt="Zee Ben Profile" 
                className="w-full h-full object-cover object-top grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary-600/10 opacity-60 pointer-events-none" />
            </div>
            {/* Quote Overlay */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-10 sm:left-10 sm:right-10 z-20 p-4 bg-dark-bg/60 backdrop-blur-md border border-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <p className="text-white text-xs sm:text-sm font-outfit italic text-center">
                 "Building digital bridges between problems and solutions."
               </p>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl -z-10 animate-float-x" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-violet-500/20 rounded-full blur-3xl -z-10 animate-float" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
