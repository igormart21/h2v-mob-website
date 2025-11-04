import { motion } from 'framer-motion'
import { FaIndustry, FaMapMarkedAlt, FaRoad } from 'react-icons/fa'
import { GridPattern } from './magicui/GridPattern'
import ProjetoPilotoImage from '../assets/ft-cpdf30-35hab2-ficha-tecnica.jpg'
import NegociacoesImage from '../assets/quantron-cizaris-fcev-1.jpg'
import EstacaoPublicaImage from '../assets/ChatGPT Image Nov 4, 2025, 11_19_53 AM.png'

const Projetos = () => {
  const projetos = [
    {
      icon: FaIndustry,
      title: 'Projeto-piloto',
      specs: '150 kW / Vale dos Sinos / 350 bar',
      description: 'Projeto demonstrativo em desenvolvimento na região do Vale dos Sinos, estabelecendo as bases para a expansão da infraestrutura de hidrogênio verde no estado.',
      status: 'Em Desenvolvimento',
      color: 'bg-h2v-green',
      image: ProjetoPilotoImage,
    },
    {
      icon: FaMapMarkedAlt,
      title: 'Negociações com Off-takers',
      description: 'Em negociação com empresas de logística, montadoras e indústrias para estabelecer parcerias estratégicas e contratos de fornecimento de longo prazo.',
      status: 'Em Negociação',
      color: 'bg-h2v-blue',
      image: NegociacoesImage,
    },
    {
      icon: FaRoad,
      title: 'Primeira Estação Pública H₂V no RS',
      description: 'Próxima etapa inclui a implementação da primeira estação pública de abastecimento de hidrogênio verde no Rio Grande do Sul, marcando um marco histórico para a mobilidade sustentável.',
      status: 'Próxima Etapa',
      color: 'bg-h2v-green',
      image: EstacaoPublicaImage,
    },
  ]

  return (
    <section id="projetos" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-h2v-blue mb-6">
            Projetos e <span className="text-h2v-green">Parcerias</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-inter">
            Construindo o ecossistema de mobilidade a hidrogênio verde no Brasil
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {projetos.map((projeto, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all border border-h2v-gray"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {projeto.image && (
                <img
                  src={projeto.image}
                  alt={projeto.title}
                  className="w-full h-auto object-contain rounded-lg mb-6 border border-h2v-gray/40 bg-gray-50"
                />
              )}
              <div className={`w-16 h-16 ${projeto.color} rounded-full flex items-center justify-center mb-6`}>
                <projeto.icon className="text-white text-2xl" />
              </div>
              <div className={`inline-block px-4 py-1 rounded-full text-xs font-semibold mb-4 ${projeto.color} text-white`}>
                {projeto.status}
              </div>
              <h3 className="text-2xl font-bold font-poppins text-h2v-blue mb-4">
                {projeto.title}
              </h3>
              {projeto.specs && (
                <p className="text-h2v-green font-semibold font-inter mb-4">
                  {projeto.specs}
                </p>
              )}
              <p className="text-gray-600 font-inter leading-relaxed">
                {projeto.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mapa/Visualização */}
        <motion.div
          className="bg-gradient-to-br from-h2v-blue to-h2v-blue/80 rounded-2xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GridPattern className="opacity-10" />
          <h3 className="text-3xl font-bold font-poppins mb-8 text-center">
            Expansão Regional
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Vale dos Sinos', 'Corredores Logísticos', 'Centros Urbanos'].map((regiao, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-xl font-poppins font-semibold mb-2">{regiao}</p>
                <div className="w-16 h-1 bg-h2v-green mx-auto"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projetos

