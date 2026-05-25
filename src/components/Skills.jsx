import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../constants';

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-dark-bg/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-outfit">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-dark-muted max-w-2xl mx-auto text-lg">
            Modern technologies I use to build robust and scalable digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 border-white/5 hover:border-primary-500/30 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-primary-400 font-outfit uppercase tracking-wider text-center">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-4 py-2 bg-white/5 rounded-xl text-dark-text text-sm font-medium border border-white/5 hover:bg-primary-600/10 hover:border-primary-500/30 transition-all duration-200"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
