import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { contactInfo } from '../constants';
import emailjs from '@emailjs/browser';

// ============================================================
// 🔑 REPLACE THESE WITH YOUR REAL EMAILJS CREDENTIALS
// 1. Sign up at https://www.emailjs.com (free: 200 emails/month)
// 2. Add an Email Service (Gmail, Outlook, etc.) → copy SERVICE_ID
// 3. Create a Template with {{from_name}}, {{from_email}}, {{message}} → copy TEMPLATE_ID
// 4. Go to Account → General → copy PUBLIC_KEY
// ============================================================
const EMAILJS_SERVICE_ID = 'service_muxptmb';
const EMAILJS_TEMPLATE_ID = 'template_bcwkews';
const EMAILJS_PUBLIC_KEY = 'VEbQN9Z_rRBc5ueFf';

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ from_name: '', from_email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const templateParams = {
        from_name: formData.from_name,
        from_email: formData.from_email,
        message: formData.message,
        reply_to: formData.from_email,
        to_email: 'monwubabenedict07@gmail.com',
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ from_name: '', from_email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error?.text || error?.message || error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-outfit">
              Let's <span className="text-gradient">Work</span> Together
            </h2>
            <p className="text-dark-muted text-lg mb-12 font-light max-w-lg leading-relaxed">
              Have a project in mind? Looking for a reliable developer to bring your vision to life? Let's connect and discuss how I can help you achieve your goals.
            </p>

            <div className="space-y-6 sm:space-y-8 mb-12">
              <div className="flex items-center gap-4 sm:gap-6 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] sm:text-sm font-medium uppercase tracking-[0.2em] text-dark-muted mb-1">Email Me</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-lg sm:text-xl font-medium text-white hover:text-primary-400 transition-colors break-all">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-6 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-[10px] sm:text-sm font-medium uppercase tracking-[0.2em] text-dark-muted mb-1">WhatsApp</p>
                  <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="text-lg sm:text-xl font-medium text-white hover:text-primary-400 transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary-600 hover:border-primary-600 transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-6 sm:p-8 md:p-10 border-white/5"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-dark-muted uppercase tracking-widest pl-1">Name</label>
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary-500 transition-colors"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-dark-muted uppercase tracking-widest pl-1">Email</label>
                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary-500 transition-colors"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-dark-muted uppercase tracking-widest pl-1">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full py-5 text-xl flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>Sending... <Loader2 size={20} className="animate-spin" /></>
                ) : (
                  <>Send Message <Send size={20} /></>
                )}
              </button>

              {/* Feedback Messages */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400"
                  >
                    <CheckCircle size={20} />
                    <span className="text-sm font-medium">Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400"
                  >
                    <AlertCircle size={20} />
                    <span className="text-sm font-medium">Failed to send. Please try again or email me directly.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
