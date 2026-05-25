import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { contactInfo } from '../constants';
import WhatsAppIcon from './WhatsAppIcon';

import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen mx-auto overflow-hidden flex items-center justify-center px-6 py-24">
      {/* Background Gradient Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-violet-600/15 rounded-full blur-[120px] animate-float-x" />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary-900/10 rounded-full blur-[150px]" />

      {/* Hero Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="hero-card z-10"
      >
        {/* Left Side — Text Content */}
        <div className="hero-card-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="hero-subtitle-tag">Web Developer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="hero-heading font-outfit"
          >
            Hello, my name<br />
            is <span className="highlight">Zee Ben</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="hero-description"
          >
            Crafting high-performance digital experiences with Laravel, React & modern web technologies for startups and established businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="hero-buttons"
          >
            <Link to="projects" smooth={true} duration={500} offset={-70} className="w-full sm:w-auto">
              <button className="btn-primary w-full px-8 py-3 text-base sm:w-auto flex justify-center items-center">
                Projects
              </button>
            </Link>
            <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="btn-secondary w-full px-8 py-3 text-base animate-shake border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center gap-2 sm:w-auto">
                <WhatsAppIcon size={20} /> Hire Me
              </button>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block z-20"
      >
        <Link to="about" smooth={true} duration={500} offset={-70} className="cursor-pointer">
          <div className="w-[30px] h-[50px] rounded-3xl border-2 border-white/20 flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-2 h-2 rounded-full bg-white/50"
            />
          </div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
