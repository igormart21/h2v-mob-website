import { motion } from 'framer-motion'
import { FaIndustry, FaWarehouse, FaGasPump, FaShoppingCart } from 'react-icons/fa'
import { Particles } from './magicui/Particles'
import { GridPattern } from './magicui/GridPattern'
import { Shimmer } from './magicui/Shimmer'

const Hero = () => {
  const icons = [
    { icon: FaIndustry, label: 'Produção' },
    { icon: FaWarehouse, label: 'Armazenamento' },
    { icon: FaGasPump, label: 'Abastecimento' },
    { icon: FaShoppingCart, label: 'Comercialização' },
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-h2v-blue">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-h2v-blue via-h2v-blue/90 to-h2v-blue"></div>
        <GridPattern className="opacity-20" />
        <Shimmer className="opacity-30" />
        <Particles className="opacity-60" quantity={50} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Integradora de Soluções em
          <br />
          <span className="text-h2v-green">Hidrogênio Verde</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-inter"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Do projeto ao fornecimento do H₂V — a energia que move o futuro.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button
            onClick={() => document.getElementById('modelo')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative bg-h2v-green text-h2v-blue px-8 py-4 rounded-full hover:bg-h2v-green/80 transition-all font-inter font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden group"
          >
            <span className="relative z-10">Conheça nossas soluções</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-h2v-green to-h2v-blue opacity-0 group-hover:opacity-20"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          </button>
          <button
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-h2v-blue transition-all font-inter font-semibold text-lg"
          >
            Entre em contato
          </button>
        </motion.div>

        {/* Icons */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {icons.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1, y: -10 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2,
                },
              }}
            >
              <div className="w-20 h-20 bg-h2v-green/20 rounded-full flex items-center justify-center mb-4 border-2 border-h2v-green/50">
                <item.icon className="text-h2v-green text-3xl" />
              </div>
              <span className="text-white font-inter text-sm md:text-base">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}

export default Hero

