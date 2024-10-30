import { motion } from 'framer-motion'

interface EnterSiteProps {
  onEnter: () => void;
}

export const EnterSite = ({ onEnter }: EnterSiteProps) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
  >
    <button
      onClick={onEnter}
      className="px-6 py-2 text-sm border border-white hover:bg-white hover:text-black transition-all duration-300"
    >
      Enter Site
    </button>
    <div className="absolute top-8 right-8 max-w-md text-sm text-gray-400">
      Excellence in Legal Services
    </div>
  </motion.div>
)
