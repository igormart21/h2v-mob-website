import { motion } from 'framer-motion'
import { FaDollarSign, FaCloud, FaProjectDiagram, FaCertificate } from 'react-icons/fa'

const ModeloNegocio = () => {
  const modelos = [
    {
      icon: FaDollarSign,
      title: 'Venda de H₂V',
      description: 'Comercialização direta de hidrogênio verde com certificação de origem renovável',
      color: 'from-h2v-green to-h2v-green/70',
    },
    {
      icon: FaCloud,
      title: 'H₂-as-a-Service',
      description: 'Modelo de assinatura com fornecimento garantido e manutenção integrada',
      color: 'from-h2v-blue to-h2v-blue/70',
    },
    {
      icon: FaProjectDiagram,
      title: 'Projetos Integrados',
      description: 'Desenvolvimento completo de projetos turnkey, da concepção à operação',
      color: 'from-h2v-green to-h2v-green/70',
    },
    {
      icon: FaCertificate,
      title: 'Créditos de Carbono',
      description: 'Geração e comercialização de créditos de carbono decorrentes da descarbonização',
      color: 'from-h2v-blue to-h2v-blue/70',
    },
  ]

  return (
    <section id="modelo" className="py-20 md:py-32 bg-h2v-gray">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-h2v-blue mb-6">
            Modelo de <span className="text-h2v-green">Negócio</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-inter">
            Quatro pilares estratégicos para soluções completas em hidrogênio verde
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {modelos.map((modelo, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all border border-h2v-gray"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <motion.div
                className={`w-20 h-20 bg-gradient-to-br ${modelo.color} rounded-full flex items-center justify-center mb-6 mx-auto`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <modelo.icon className="text-white text-3xl" />
              </motion.div>
              <h3 className="text-xl font-bold font-poppins text-h2v-blue mb-4 text-center">
                {modelo.title}
              </h3>
              <p className="text-gray-600 font-inter text-center leading-relaxed">
                {modelo.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bloco Final */}
        <motion.div
          className="bg-gradient-to-r from-h2v-blue to-h2v-blue/80 rounded-2xl p-8 md:p-12 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
            <h3 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Receita Recorrente e Certificações Ambientais
            </h3>
            <p className="text-lg md:text-xl font-inter text-white/90 max-w-3xl mx-auto">
              Nossos modelos de negócio garantem receitas recorrentes através de contratos de longo prazo, enquanto proporcionam certificações ambientais que agregam valor aos nossos clientes e parceiros.
            </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ModeloNegocio

