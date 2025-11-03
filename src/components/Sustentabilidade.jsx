import { motion } from 'framer-motion'
import { FaCubes, FaIndustry, FaTruck, FaCity, FaLeaf } from 'react-icons/fa'
import { GridPattern } from './magicui/GridPattern'

const Sustentabilidade = () => {
  const pilares = [
    {
      icon: FaCubes,
      title: 'Modelo Modular',
      description: 'Soluções replicáveis e escaláveis que se adaptam a diferentes contextos e necessidades',
    },
    {
      icon: FaIndustry,
      title: 'Polos Industriais',
      description: 'Conexão com centros industriais estratégicos para maximizar impacto e eficiência',
    },
    {
      icon: FaTruck,
      title: 'Corredores Logísticos',
      description: 'Infraestrutura ao longo das principais rotas de transporte do país',
    },
    {
      icon: FaCity,
      title: 'Centros Urbanos',
      description: 'Soluções para mobilidade urbana sustentável em grandes centros',
    },
  ]

  return (
    <section id="sustentabilidade" className="py-20 md:py-32 bg-h2v-gray">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <FaLeaf className="text-6xl text-h2v-green mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-h2v-blue mb-6">
            Sustentabilidade e <span className="text-h2v-green">Replicabilidade</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto font-inter leading-relaxed">
            Nosso modelo modular e replicável permite expandir soluções em hidrogênio verde de forma eficiente e sustentável, conectando indústria, logística e transporte.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {pilares.map((pilar, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all border border-h2v-gray text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-h2v-green to-h2v-green/70 rounded-full flex items-center justify-center mb-6 mx-auto">
                <pilar.icon className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold font-poppins text-h2v-blue mb-4">
                {pilar.title}
              </h3>
              <p className="text-gray-600 font-inter leading-relaxed">
                {pilar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bloco de Destaque */}
        <motion.div
          className="bg-gradient-to-r from-h2v-green to-h2v-green/80 rounded-2xl p-8 md:p-12 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GridPattern className="opacity-10" />
            <h3 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
              Conectando Indústria, Logística e Transporte
            </h3>
            <p className="text-lg md:text-xl font-inter text-white/90 max-w-4xl mx-auto leading-relaxed">
              Criamos pontes entre diferentes setores, promovendo a integração de soluções sustentáveis que beneficiam toda a cadeia produtiva. Nosso modelo permite que empresas reduzam suas pegadas de carbono enquanto aumentam sua eficiência operacional.
            </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Sustentabilidade

