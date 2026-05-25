import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { contactInfo } from '../constants';
import WhatsAppIcon from './WhatsAppIcon';

const HireMeFloat = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0, x: 20 }}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[60]"
        >
          <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 p-4 md:px-6 md:py-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full font-bold shadow-2xl shadow-green-500/40 group transition-all duration-300 animate-shake">
              <span className="hidden md:inline whitespace-nowrap">Hire Me</span>
              <WhatsAppIcon size={22} className="group-hover:scale-110 transition-transform" />
            </button>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HireMeFloat;
