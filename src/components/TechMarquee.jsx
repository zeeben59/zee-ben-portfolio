import React from 'react';
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

import LogoLoop from './LogoLoop';

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

const TechMarquee = () => {
  return (
    <div id="skills" className="py-12 md:py-20 bg-dark-bg relative flex flex-col items-center justify-center overflow-hidden border-t border-white/5">
      <div className="mb-16 text-center z-10 relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-outfit text-white">
          Tech <span className="text-primary-500">Stack</span>
        </h2>
        <p className="text-dark-muted max-w-2xl mx-auto px-4 font-light text-lg">
          Modern technologies I use to build robust and scalable digital solutions.
        </p>
      </div>

      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary-500/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[120px] -z-10" />

      <div className="w-full relative space-y-8 z-10">
        <LogoLoop
          logos={techLogos}
          speed={40}
          direction="left"
          logoHeight={50}
          gap={80}
          hoverSpeed={10} // slow down on hover instead of full stop
          scaleOnHover={true}
          fadeOut={true}
          fadeOutColor="#030712"
        />
        
        <LogoLoop
          logos={[...techLogos].reverse()}
          speed={30}
          direction="right"
          logoHeight={50}
          gap={80}
          hoverSpeed={5}
          scaleOnHover={true}
          fadeOut={true}
          fadeOutColor="#030712"
        />
      </div>
    </div>
  );
};

export default TechMarquee;
