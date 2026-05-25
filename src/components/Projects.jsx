import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../constants';

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           viewport={{ once: true }}
           className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-outfit text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-dark-muted max-w-2xl mx-auto text-lg leading-relaxed">
            A selection of my recent work, ranging from complex crypto platforms to AI-powered solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-600/20"
                  : "bg-white/5 text-dark-muted hover:bg-white/10 hover:text-white border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card overflow-hidden flex flex-col group border-white/5 hover:border-primary-500/30 transition-all duration-500 rounded-3xl"
              >
                <div className="relative h-60 sm:h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-dark-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-primary-600 rounded-full transition-colors backdrop-blur-md text-white">
                      <Github size={22} />
                    </a>
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-primary-600 rounded-full transition-colors backdrop-blur-md text-white">
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-4 gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold font-outfit text-white group-hover:text-primary-400 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary-500/80 bg-primary-500/10 px-3 py-1 rounded-full whitespace-nowrap">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-dark-muted mb-6 text-sm sm:text-base line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="text-[10px] font-bold uppercase tracking-tighter text-dark-text/60 bg-white/5 px-2 py-1 rounded border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
