import { motion } from 'framer-motion'
import { RiWhatsappLine } from 'react-icons/ri'

const WHATSAPP_NUMBER = '2347066313789' // user's WhatsApp number
const WHATSAPP_MSG = encodeURIComponent("Hello Monwuba Benedict Okechukwu! I'd like to discuss a project with you.")

export default function FloatingWhatsApp() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white text-3xl whatsapp-pulse shadow-xl"
    >
      <RiWhatsappLine />
    </motion.a>
  )
}
