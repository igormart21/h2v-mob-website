import { motion } from 'framer-motion'
import { FaCheckCircle, FaCertificate, FaCubes, FaHandshake, FaMapMarkerAlt, FaFlask } from 'react-icons/fa'
import { Particles } from './magicui/Particles'
import { GridPattern } from './magicui/GridPattern'

const Diferenciais = () => {
  const diferenciais = [
    {
      icon: FaCheckCircle,
      title: 'Integração Vertical Completa',
      description: 'Cobertura de toda a cadeia de valor, da produção à comercialização',
    },
    {
      icon: FaCertificate,
      title: 'Certificação de Origem',
      description: 'ISCC / ABNT ISO 19870 para garantia de origem renovável e rastreabilidade',
    },
    {
      icon: FaCubes,
      title: 'Modelo Modular e Replicável',
      description: 'Soluções escaláveis que se adaptam às necessidades de cada projeto',
    },
    {
      icon: FaHandshake,
      title: 'Parcerias Estratégicas',
      description: 'Universidades, Embrapii, Programas RS - rede de inovação e desenvolvimento',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Enfoque Local',
      description: 'Matriz renovável e polos regionais, fortalecendo o desenvolvimento sustentável local',
    },
    {
      icon: FaFlask,
      title: 'Inovação Tecnológica',
      description: 'Pesquisa e desenvolvimento contínuos em tecnologias de ponta para hidrogênio verde',
    },
  ]

  return (
    <section id="diferenciais" className="py-20 md:py-32 bg-h2v-blue relative overflow-hidden">
      {/* Magic UI Background Effects */}
      <div className="absolute inset-0">
        <GridPattern className="opacity-10" />
        <Particles className="opacity-40" quantity={40} />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6">
            Nossos <span className="text-h2v-green">Diferenciais</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-inter">
            O que nos torna referência nacional em mobilidade e energia a hidrogênio verde
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {diferenciais.map((diferencial, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-h2v-green to-h2v-green/50 rounded-full flex items-center justify-center mb-6">
                <diferencial.icon className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold font-poppins text-white mb-4">
                {diferencial.title}
              </h3>
              <p className="text-white/80 font-inter leading-relaxed">
                {diferencial.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Diferenciais

