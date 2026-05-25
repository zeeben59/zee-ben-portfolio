import React from 'react';
import { motion } from 'framer-motion';
import { Star, BookOpen, Wrench, Heart, Zap, Quote } from 'lucide-react';
import { bentoData } from '../constants';
import LogoLoop from './LogoLoop';
import { 
  SiReact, 
  SiLaravel, 
  SiJavascript, 
  SiNodedotjs, 
  SiMysql, 
  SiTailwindcss, 
  SiGit, 
  SiPhp 
} from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiPhp />, title: "PHP", href: "https://www.php.net" },
];

const BentoCard = ({ title, subtitle, icon: Icon, children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className={`glass-card p-6 md:p-8 flex flex-col h-full bg-[#1a1c2e]/40 border-white/5 hover:border-primary-500/30 transition-all duration-500 group ${className}`}
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-xl bg-primary-600/20 flex items-center justify-center text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
        <Icon size={20} />
      </div>
      <div>
        <h3 className="text-2xl font-bold font-outfit text-white leading-tight">{title}</h3>
      </div>
    </div>
    <p className="text-dark-muted text-sm mb-8 font-light leading-relaxed">
      {subtitle}
    </p>
    <div className="flex-1">
      {children}
    </div>
  </motion.div>
);

const Services = () => {
  return (
    <section id="services" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-gradient text-sm font-bold uppercase tracking-[0.3em] mb-4">Discovery</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-outfit text-white">
            My <span className="text-gradient">Essentials</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[450px]">
          {/* My Philosophy */}
          <BentoCard 
            title="My Philosophy" 
            subtitle="The core principles that drive my coding and design approach."
            icon={Quote}
            className="md:col-span-1"
          >
            <div className="relative h-full flex flex-col justify-center items-center text-center p-6 bg-gradient-to-br from-primary-900/40 to-dark-bg rounded-2xl border border-primary-500/20 shadow-inner group-hover:border-primary-500/40 transition-colors duration-500">
               <Quote className="text-primary-500/40 w-16 h-16 mb-6 transform group-hover:scale-110 transition-transform duration-500" />
               <p className="text-white text-xl md:text-2xl font-outfit italic leading-relaxed">
                 "Write code that humans can read, and machines can execute perfectly."
               </p>
               <div className="mt-8 w-12 h-1 bg-primary-500 rounded-full group-hover:w-24 transition-all duration-500" />
            </div>
          </BentoCard>

          {/* My Toolbox */}
          <BentoCard 
            title="My Toolbox" 
            subtitle="Explore the technologies and tools I use to craft premium digital experiences."
            icon={Wrench}
            className="md:col-span-2"
          >
            <div className="flex flex-col justify-center h-full space-y-8 -mx-4">
              <LogoLoop
                logos={techLogos}
                speed={35}
                direction="left"
                logoHeight={40}
                gap={60}
                hoverSpeed={10}
                scaleOnHover={true}
                fadeOut={true}
                fadeOutColor="#131526"
              />
              <LogoLoop
                logos={[...techLogos].reverse()}
                speed={30}
                direction="right"
                logoHeight={40}
                gap={60}
                hoverSpeed={5}
                scaleOnHover={true}
                fadeOut={true}
                fadeOutColor="#131526"
              />
            </div>
          </BentoCard>

          {/* My Hobbies */}
          <BentoCard 
            title="My Hobbies" 
            subtitle="Explore my interests beyond the digital realm and how I spend my downtime."
            icon={Heart}
            className="md:col-span-1"
          >
            <div className="flex flex-wrap gap-3">
              {bentoData.hobbies.map((hobby) => (
                <div 
                  key={hobby.name}
                  className="px-6 py-3 bg-white/5 border border-white/5 rounded-full text-white text-sm font-medium hover:bg-primary-600/20 hover:border-primary-500/30 transition-all duration-300 cursor-default"
                >
                  <span className="mr-2">{hobby.emoji}</span>
                  {hobby.name}
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 rounded-2xl bg-gradient-to-br from-primary-600/10 to-transparent border border-white/5">
                <p className="text-dark-muted text-xs italic">"Striving for a balanced life of creativity and discovery."</p>
            </div>
          </BentoCard>

          {/* Dynamic Map Integration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2 glass-card overflow-hidden h-[300px] md:h-full relative group p-2"
          >
            <div className="absolute top-6 left-6 z-10 p-3 bg-dark-bg/80 backdrop-blur-md border border-white/10 rounded-2xl">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-xs ring-4 ring-primary-600/20">
                     ZB
                   </div>
                   <div>
                      <p className="text-[10px] font-bold text-primary-400 uppercase tracking-widest leading-none">Located in</p>
                      <p className="text-white text-sm font-bold">Awka, Nigeria</p>
                   </div>
                </div>
            </div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15855.811649144!2d7.035119!3d6.207046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMjUuNCJOIDfCsDAyJzM3LjkiRQ!5e0!3m2!1sen!2sng!4v1711457000000!5m2!1sen!2sng" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Interactive Location"
              className="rounded-2xl"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
