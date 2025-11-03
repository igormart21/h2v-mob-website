import { motion } from 'framer-motion'
import logo from '../assets/logo_basic (1).png'

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-h2v-blue flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.img
          src={logo}
          alt="H2V Mob"
          className="h-48 md:h-56 w-auto mx-auto mb-4"
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="w-16 h-1 bg-h2v-green mx-auto mt-4"
          animate={{ width: ['0%', '100%', '0%'] }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  )
}

export default Loader

