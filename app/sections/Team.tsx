import { motion } from 'framer-motion'
import { SectionProps } from '../types'
import { slideVariants, staggerContainer, staggerItem } from '../utils/animations'

const teamMembers = [
  { name: 'John Doe', role: 'Managing Partner' },
  { name: 'Jane Smith', role: 'Senior Attorney' },
  { name: 'Mike Johnson', role: 'Corporate Law Specialist' },
  { name: 'Sarah Williams', role: 'Family Law Expert' }
]

export const Team = ({ direction }: SectionProps) => (
  <motion.section
    key="team"
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
      <div className="max-w-6xl mx-auto px-6">
        <motion.h3 
          className="text-4xl font-light mb-12 text-center"
          variants={staggerItem}
        >
          Our Team
        </motion.h3>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="text-center"
              variants={staggerItem}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-100" />
              </motion.div>
              <h4 className="text-xl font-light mb-2">{member.name}</h4>
              <p className="text-gray-600">{member.role}</p>
              <motion.button
                className="mt-4 text-sm border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Profile
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  </motion.section>
)
