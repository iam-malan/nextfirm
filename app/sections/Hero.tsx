import { motion } from 'framer-motion'
import { SectionProps } from '../types'
import { slideVariants, staggerContainer, staggerItem } from '../utils/animations'

export const Hero = ({ direction }: SectionProps) => (
  <motion.section
    key="hero"
    custom={direction}
    variants={slideVariants}
    initial="enter"
    animate="center"
    exit="exit"
    className="section-slide bg-black"
  >
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-50" />
    </div>
    <motion.div 
      className="relative h-full flex items-center justify-center text-center"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <div>
        <motion.h2 
          className="text-6xl font-light mb-6"
          variants={staggerItem}
        >
          Justice & Integrity
        </motion.h2>
        <motion.p 
          className="text-xl font-light mb-8"
          variants={staggerItem}
        >
          Committed to protecting your rights and interests
        </motion.p>
        <motion.button 
          className="text-sm border border-white px-6 py-3 hover:bg-white hover:text-black transition-all duration-300"
          variants={staggerItem}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Our Services
        </motion.button>
      </div>
    </motion.div>
  </motion.section>
)
