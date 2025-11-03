import { motion } from 'framer-motion'
import { FaIndustry, FaWarehouse, FaGasPump, FaShoppingCart, FaUsers } from 'react-icons/fa'

const Sobre = () => {
  const services = [
    {
      icon: FaIndustry,
      title: 'Produção Integrada',
      description: 'Plantas modulares de eletrólise 100 kW a 5 MW',
      color: 'from-h2v-green to-h2v-green/50',
    },
    {
      icon: FaWarehouse,
      title: 'Armazenamento & Logística',
      description: 'Tanques e compressão 350–700 bar',
      color: 'from-h2v-blue to-h2v-blue/50',
    },
    {
      icon: FaGasPump,
      title: 'Abastecimento',
      description: 'Estações para caminhões, ônibus e empilhadeiras',
      color: 'from-h2v-green to-h2v-green/50',
    },
    {
      icon: FaShoppingCart,
      title: 'Comercialização',
      description: 'Marketplace e contratos Power-to-H₂ com rastreabilidade',
      color: 'from-h2v-blue to-h2v-blue/50',
    },
  ]

  return (
    <section id="sobre" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-h2v-blue mb-6">
            Sobre a <span className="text-h2v-green">H2V Mob</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto font-inter leading-relaxed">
            Desenvolvemos e operamos soluções completas em hidrogênio verde.
            <br />
            <span className="font-semibold">Produção integrada, armazenamento, abastecimento e comercialização.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all border border-h2v-gray"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mb-6`}>
                <service.icon className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold font-poppins text-h2v-blue mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 font-inter">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Desenvolvimento de Off-takers */}
        <motion.div
          className="bg-gradient-to-r from-h2v-blue to-h2v-blue/80 rounded-2xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="w-20 h-20 bg-h2v-green/20 rounded-full flex items-center justify-center mb-6 border-2 border-h2v-green/50">
                <FaUsers className="text-h2v-green text-3xl" />
              </div>
              <h3 className="text-3xl font-bold font-poppins mb-4">
                Desenvolvimento de Off-takers
              </h3>
              <p className="text-lg font-inter text-white/90 leading-relaxed">
                Identificamos e desenvolvemos parcerias estratégicas com empresas que buscam descarbonizar suas operações através do hidrogênio verde. Nossa expertise conecta oferta e demanda, criando ecossistemas sustentáveis de mobilidade e energia.
              </p>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4">
                {['Logística', 'Montadoras', 'Indústrias', 'Transporte'].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20"
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="font-poppins font-semibold">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Sobre

