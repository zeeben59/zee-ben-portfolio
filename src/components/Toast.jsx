import { AnimatePresence, motion } from 'framer-motion'
import { RiCheckLine, RiCloseLine } from 'react-icons/ri'

export default function Toast({ toasts }) {
  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col gap-3">
      <AnimatePresence>
        {toasts.map(t => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, x: 80, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 80, scale: 0.8 }}
            className={`flex items-center gap-3 px-5 py-4 rounded-xl shadow-xl font-medium text-sm max-w-xs ${
              t.type === 'success'
                ? 'bg-green-500/20 border border-green-500/40 text-green-300'
                : 'bg-red-500/20 border border-red-500/40 text-red-300'
            }`}
          >
            {t.type === 'success'
              ? <RiCheckLine className="text-green-400 text-lg flex-shrink-0" />
              : <RiCloseLine className="text-red-400 text-lg flex-shrink-0"  />}
            {t.message}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
