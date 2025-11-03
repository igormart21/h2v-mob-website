import { motion } from 'framer-motion'
import ecosystemImage from '../assets/HydrogenKeyViz-Webheader-mireo-jpg_Rendition1920.JPG'

const Ecosistema = () => {
  return (
    <section id="ecosistema" className="relative overflow-hidden min-h-[60vh] md:min-h-[70vh] py-20 md:py-28 border-y-2 border-h2v-green/20">
      {/* Background full-section */}
      <div className="absolute inset-0">
        <img
          src={ecosystemImage}
          alt="Ecossistema do Hidrogênio Verde"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-h2v-blue/60 via-h2v-blue/40 to-h2v-blue/20" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-poppins text-white">
            Ecossistema do Hidrogênio Verde
          </h2>
          <p className="mt-4 text-lg md:text-xl text-white/90 font-inter">
            Uma visão integrada de produção, armazenamento, mobilidade e geração elétrica,
            conectando indústrias, logística e cidades.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Ecosistema


