import { motion } from 'framer-motion'
import { SectionProps } from '../types'
import { slideVariants, staggerContainer, staggerItem } from '../utils/animations'

const stats = [
  { number: '25+', label: 'Years of Experience' },
  { number: '1000+', label: 'Cases Won' },
  { number: '98%', label: 'Client Satisfaction' }
]

export const About = ({ direction }: SectionProps) => (
  <motion.section
    key="about"
    custom={direction}
    variants={slideVariants}
    initial="enter"
    animate="center"
    exit="exit"
    className="section-slide bg-white text-black"
  >
    <motion.div 
      className="h-full flex items-center justify-center"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.h3 
          className="text-4xl font-light mb-8"
          variants={staggerItem}
        >
          About Our Firm
        </motion.h3>
        <motion.div 
          className="grid grid-cols-3 gap-8 mb-12"
          variants={staggerContainer}
        >
          {stats.map((stat) => (
            <motion.div 
              key={stat.label} 
              className="text-center"
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-4xl font-light mb-2">{stat.number}</p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.p 
          className="text-gray-600 mb-6"
          variants={staggerItem}
        >
          With over 25 years of experience, our law firm has been at the forefront of
          legal excellence. We've successfully represented clients in a wide range of
          cases, always striving for justice and the best possible outcomes.
        </motion.p>
      </div>
    </motion.div>
  </motion.section>
)
