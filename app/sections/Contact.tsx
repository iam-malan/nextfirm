import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { SectionProps } from '../types'
import { slideVariants, staggerContainer, staggerItem } from '../utils/animations'

const contactInfo = [
  { icon: Phone, text: '(123) 456-7890' },
  { icon: Mail, text: 'info@lawfirm.com' },
  { icon: MapPin, text: '123 Legal Street, Cityville' },
  { icon: Clock, text: 'Mon-Fri: 9am-6pm' }
]

export const Contact = ({ direction }: SectionProps) => (
  <motion.section
    key="contact"
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
      <div className="max-w-4xl mx-auto px-6">
        <motion.h3 
          className="text-4xl font-light mb-12 text-center"
          variants={staggerItem}
        >
          Contact Us
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            className="space-y-6"
            variants={staggerContainer}
          >
            {contactInfo.map(({ icon: Icon, text }) => (
              <motion.p 
                key={text}
                className="flex items-center text-lg"
                variants={staggerItem}
                whileHover={{ x: 10 }}
              >
                <Icon className="mr-4 text-gray-400" />
                {text}
              </motion.p>
            ))}
          </motion.div>
          <motion.div 
            className="space-y-6"
            variants={staggerContainer}
          >
            <motion.div
              variants={staggerItem}
              className="relative"
            >
              <motion.button
                className="w-full border border-white px-6 py-3 hover:bg-white hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Consultation
              </motion.button>
            </motion.div>
            <motion.div
              variants={staggerItem}
              className="text-gray-400 text-sm mt-4"
            >
              <p>
                Get in touch with us for a free initial consultation. 
                Our team is ready to help you with your legal needs.
              </p>
            </motion.div>
            <motion.div
              variants={staggerItem}
              className="flex space-x-4 mt-6"
            >
              {['LinkedIn', 'Twitter', 'Facebook'].map((platform) => (
                <motion.a
                  key={platform}
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {platform}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  </motion.section>
)
