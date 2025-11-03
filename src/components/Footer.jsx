import { motion } from 'framer-motion'
import { FaLeaf, FaRecycle, FaSolarPanel, FaWind, FaEnvelope, FaPhone, FaGlobe, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'
import { GridPattern } from './magicui/GridPattern'
import logo from '../assets/logo_basic (1).png'

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navigationLinks = [
    { label: 'Sobre', id: 'sobre' },
    { label: 'Diferenciais', id: 'diferenciais' },
    { label: 'Mercado', id: 'mercado' },
    { label: 'Modelo de Negócio', id: 'modelo' },
    { label: 'Projetos', id: 'projetos' },
    { label: 'Sustentabilidade', id: 'sustentabilidade' },
    { label: 'Contato', id: 'contato' },
  ]

  const services = [
    'Produção Integrada',
    'Armazenamento & Logística',
    'Abastecimento',
    'Comercialização',
  ]

  const sustainabilityIcons = [
    { icon: FaLeaf, label: 'Sustentabilidade' },
    { icon: FaRecycle, label: 'Economia Circular' },
    { icon: FaSolarPanel, label: 'Energia Renovável' },
    { icon: FaWind, label: 'Descarbonização' },
  ]

  const socialLinks = [
    { icon: FaLinkedin, label: 'LinkedIn', url: 'https://linkedin.com/company/h2vmob' },
    { icon: FaInstagram, label: 'Instagram', url: 'https://instagram.com/h2vmob' },
    { icon: FaFacebook, label: 'Facebook', url: 'https://facebook.com/h2vmob' },
  ]

  return (
    <footer className="relative bg-h2v-blue border-t-2 border-h2v-green/20 overflow-hidden">
      <GridPattern className="opacity-5" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Conteúdo Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 py-12">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={logo} 
                alt="H2V Mob - Integradora de Soluções em Hidrogênio Verde" 
                className="h-24 md:h-28 w-auto mb-4"
              />
              <p className="text-white/90 font-inter mb-4 leading-relaxed">
                Integradora de Soluções em Hidrogênio Verde. Do projeto ao fornecimento do H₂V — a energia que move o futuro.
              </p>
              <div className="flex gap-4 mt-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-h2v-green/20 rounded-full flex items-center justify-center border border-h2v-green/50 hover:bg-h2v-green/30 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="text-h2v-green text-lg" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links de Navegação */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-bold font-poppins text-white mb-4">
                Navegação
              </h4>
              <ul className="space-y-2">
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-white/70 hover:text-h2v-green transition-colors font-inter text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Serviços */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-bold font-poppins text-white mb-4">
                Serviços
              </h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-white/70 font-inter text-sm">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contato */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-bold font-poppins text-white mb-4">
                Contato
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FaEnvelope className="text-h2v-green mt-1 flex-shrink-0" />
                  <a
                    href="mailto:ricardo@h2vmob.com.br"
                    className="text-white/70 hover:text-h2v-green transition-colors font-inter text-sm"
                  >
                    ricardo@h2vmob.com.br
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <FaPhone className="text-h2v-green mt-1 flex-shrink-0" />
                  <a
                    href="tel:+5551980520170"
                    className="text-white/70 hover:text-h2v-green transition-colors font-inter text-sm"
                  >
                    (51) 98052-0170
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <FaGlobe className="text-h2v-green mt-1 flex-shrink-0" />
                  <a
                    href="https://www.h2vmob.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-h2v-green transition-colors font-inter text-sm"
                  >
                    www.h2vmob.com.br
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-h2v-green mt-1 flex-shrink-0" />
                  <span className="text-white/70 font-inter text-sm">
                    Rio Grande do Sul, Brasil
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Ícones de Sustentabilidade */}
        <div className="border-t border-white/10 pt-8 pb-6">
          <div className="flex flex-wrap justify-center gap-8 mb-6">
            {sustainabilityIcons.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                whileHover={{ scale: 1.1, y: -5 }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  },
                }}
              >
                <div className="w-14 h-14 bg-h2v-green/20 rounded-full flex items-center justify-center mb-2 border border-h2v-green/50">
                  <item.icon className="text-h2v-green text-xl" />
                </div>
                <span className="text-white/60 text-xs font-inter text-center max-w-[120px]">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Copyright e Links Legais */}
        <div className="border-t border-white/10 pt-6 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-white/60 font-inter text-sm">
                © {new Date().getFullYear()} H2V Mob. Todos os direitos reservados.
              </p>
              <p className="text-white/50 font-inter text-xs mt-1">
                Integradora de Soluções em Hidrogênio Verde
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              <a href="#" className="text-white/60 hover:text-h2v-green transition-colors font-inter text-xs">
                Política de Privacidade
              </a>
              <span className="text-white/30">•</span>
              <a href="#" className="text-white/60 hover:text-h2v-green transition-colors font-inter text-xs">
                Termos de Uso
              </a>
              <span className="text-white/30">•</span>
              <span className="text-white/60 font-inter text-xs">
                Desenvolvido com foco em sustentabilidade
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

