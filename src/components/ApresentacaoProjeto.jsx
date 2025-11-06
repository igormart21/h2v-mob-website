import { useState } from 'react'
import { motion } from 'framer-motion'

import videoApresentacao from '../assets/WhatsApp Video 2025-11-05 at 09.27.54.mp4'

const ApresentacaoProjeto = () => {
  const [aspectRatio, setAspectRatio] = useState(16 / 9)

  const handleLoadedMetadata = (e) => {
    const video = e.currentTarget
    if (video?.videoWidth && video?.videoHeight) {
      setAspectRatio(video.videoWidth / video.videoHeight)
    }
  }

  return (
    <section id="apresentacao" className="relative py-16 md:py-24 bg-white border-y-2 border-h2v-green/20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-poppins text-h2v-blue">
            Apresentação do Projeto
          </h2>
          <p className="text-gray-700 font-inter mt-3 md:text-lg">
            Visão geral em vídeo do projeto de mobilidade a hidrogênio
          </p>
        </motion.div>

        <div
          className="relative rounded-xl overflow-hidden shadow-xl bg-h2v-blue w-full max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto h-[220px] md:h-[360px] lg:h-[480px]"
          style={{ aspectRatio }}
        >
          <motion.video
            key="video-apresentacao"
            className="absolute inset-0 w-full h-full object-contain"
            autoPlay
            muted
            loop
            playsInline
            controls
            onLoadedMetadata={handleLoadedMetadata}
            initial={{ opacity: 0, scale: 1.02 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <source src={videoApresentacao} type="video/mp4" />
          </motion.video>
        </div>
      </div>
    </section>
  )
}

export default ApresentacaoProjeto


