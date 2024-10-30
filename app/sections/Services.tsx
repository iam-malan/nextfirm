import { motion } from 'framer-motion'
import { SectionProps } from '../types'
import { slideVariants, staggerContainer, staggerItem } from '../utils/animations'

const services = [
  {
    title: 'Corporate Law',
    description: 'Expert guidance for businesses of all sizes'
  },
  {
    title: 'Family Law',
    description: 'Compassionate support for family-related matters'
  },
  {
    title: 'Criminal Defense',
    description: 'Vigorous defense of your rights and freedom'
  }
]

export const Services = ({ direction }: SectionProps) => (
  <motion.section
    key="services"
    custom={direction}
    variants={slideVariants}
    initial="enter"
    animate="center"
    exit="exit"
    className="section-slide bg-black"
  >
    <motion.div 
      className="h-full flex items-center justify-center"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h3 
          className="text-4xl font-light mb-12 text-center"
          variants={staggerItem}
        >
          Our Services
        </motion.h3>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="text-center"
              variants={staggerItem}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <h4 className="text-xl font-light mb-4">{service.title}</h4>
              <p className="text-gray-400">{service.description}</p>
              <motion.button
                className="mt-6 text-sm border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  </motion.section>
)
