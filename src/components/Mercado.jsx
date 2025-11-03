import { motion } from 'framer-motion'
import { FaChartLine, FaLeaf, FaMapMarkedAlt } from 'react-icons/fa'
import { GridPattern } from './magicui/GridPattern'
import pipelineImage from '../assets/H2V-Mob - A presentação_Extracted_page-0001.jpg'

const Mercado = () => {
  return (
    <section id="mercado" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-h2v-blue mb-6">
            Mercado e <span className="text-h2v-green">Impacto</span>
          </h2>
        </motion.div>

        {/* Estatística Principal */}
        <motion.div
          className="bg-gradient-to-br from-h2v-blue to-h2v-blue/80 rounded-2xl p-8 md:p-12 mb-16 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GridPattern className="opacity-10" />
          
          {/* Pipeline Image Background */}
          <div className="absolute inset-0 opacity-20">
            <img
              src={pipelineImage}
              alt="Infraestrutura de Hidrogênio Verde"
              className="w-full h-full object-cover object-center"
              style={{ filter: 'brightness(0.8) contrast(1.2)' }}
            />
          </div>
          
          {/* Overlay gradiente para melhor legibilidade */}
          <div className="absolute inset-0 bg-gradient-to-br from-h2v-blue/65 via-h2v-blue/55 to-h2v-blue/65"></div>
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-h2v-green/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-h2v-green/10 rounded-full -ml-24 -mb-24"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-8">
              <FaChartLine className="text-6xl text-h2v-green mr-4" />
              <motion.div
                className="text-6xl md:text-8xl font-bold font-poppins"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                45%
              </motion.div>
            </div>
            <p className="text-2xl md:text-3xl font-bold font-poppins text-center mb-4">
              das emissões do setor energético
            </p>
            <p className="text-xl md:text-2xl font-inter text-center text-white/90">
              vêm do transporte
            </p>
          </div>
        </motion.div>

        {/* Texto Explicativo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="bg-h2v-gray/50 rounded-xl p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <FaLeaf className="text-4xl text-h2v-green mb-6" />
            <h3 className="text-2xl font-bold font-poppins text-h2v-blue mb-4">
              Descarbonização
            </h3>
            <p className="text-gray-700 font-inter leading-relaxed">
              O hidrogênio verde representa uma oportunidade única para descarbonizar o setor de transportes, especialmente no transporte pesado, onde as baterias elétricas têm limitações técnicas e econômicas significativas.
            </p>
          </motion.div>

          <motion.div
            className="bg-h2v-gray/50 rounded-xl p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <FaMapMarkedAlt className="text-4xl text-h2v-green mb-6" />
            <h3 className="text-2xl font-bold font-poppins text-h2v-blue mb-4">
              Potencial do RS
            </h3>
            <p className="text-gray-700 font-inter leading-relaxed">
              O Rio Grande do Sul possui uma matriz energética renovável significativa e corredores logísticos estratégicos, posicionando-se como região ideal para o desenvolvimento de projetos de hidrogênio verde.
            </p>
          </motion.div>
        </div>

        {/* Oportunidade */}
        <motion.div
          className="bg-gradient-to-r from-h2v-green to-h2v-green/80 rounded-2xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
            <h3 className="text-3xl md:text-4xl font-bold font-poppins mb-6 text-center">
              Oportunidade: Hidrogênio Verde no Transporte Pesado
            </h3>
            <p className="text-lg md:text-xl font-inter text-center text-white/90 max-w-4xl mx-auto leading-relaxed">
              O transporte pesado é responsável por uma parcela significativa das emissões globais. O hidrogênio verde oferece uma solução viável para caminhões, ônibus e veículos industriais, com autonomia superior e tempos de abastecimento comparáveis aos combustíveis fósseis.
            </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Mercado

