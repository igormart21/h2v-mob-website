import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/logo_basic (1).png'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-h2v-blue/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-24 md:h-28">
          <motion.div
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('hero')}
          >
            <img 
              src={logo} 
              alt="H2V Mob - Integradora de Soluções em Hidrogênio Verde" 
              className="h-24 md:h-28 w-auto"
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-white hover:text-h2v-green transition-colors font-inter"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('diferenciais')}
              className="text-white hover:text-h2v-green transition-colors font-inter"
            >
              Diferenciais
            </button>
            <button
              onClick={() => scrollToSection('mercado')}
              className="text-white hover:text-h2v-green transition-colors font-inter"
            >
              Mercado
            </button>
            <button
              onClick={() => scrollToSection('modelo')}
              className="text-white hover:text-h2v-green transition-colors font-inter"
            >
              Modelo de Negócio
            </button>
            <button
              onClick={() => scrollToSection('projetos')}
              className="text-white hover:text-h2v-green transition-colors font-inter"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-h2v-green text-h2v-blue px-6 py-2 rounded-full hover:bg-h2v-green/80 transition-all font-inter font-semibold"
            >
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 space-y-4"
          >
            <button
              onClick={() => scrollToSection('sobre')}
              className="block text-white hover:text-h2v-green transition-colors font-inter w-full text-left"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('diferenciais')}
              className="block text-white hover:text-h2v-green transition-colors font-inter w-full text-left"
            >
              Diferenciais
            </button>
            <button
              onClick={() => scrollToSection('mercado')}
              className="block text-white hover:text-h2v-green transition-colors font-inter w-full text-left"
            >
              Mercado
            </button>
            <button
              onClick={() => scrollToSection('modelo')}
              className="block text-white hover:text-h2v-green transition-colors font-inter w-full text-left"
            >
              Modelo de Negócio
            </button>
            <button
              onClick={() => scrollToSection('projetos')}
              className="block text-white hover:text-h2v-green transition-colors font-inter w-full text-left"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="block text-white hover:text-h2v-green transition-colors font-inter w-full text-left"
            >
              Contato
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar

