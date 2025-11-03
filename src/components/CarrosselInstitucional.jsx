import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import imgA from '../assets/03152238_85593_GD.jpeg'
import imgB from '../assets/WhatsApp Image 2025-10-30 at 15.55.08 (2).jpeg'
import imgC from '../assets/WhatsApp Image 2025-10-30 at 15.55.08 (3).jpeg'
import imgD from '../assets/WhatsApp Image 2025-10-30 at 15.55.07 (2).jpeg'
import imgE from '../assets/WhatsApp Image 2025-10-30 at 15.55.07 (3).jpeg'
import imgF from '../assets/WhatsApp Image 2025-10-30 at 15.55.07.jpeg'

const CarrosselInstitucional = () => {
  const slides = useMemo(() => [
    {
      src: imgA,
      title: 'Parcerias e Diálogo',
      text: 'H2V Mob conecta governo, indústria e academia para acelerar a economia do hidrogênio.'
    },
    {
      src: imgB,
      title: 'Visitas Técnicas',
      text: 'Levantamentos em plantas industriais para mapear demanda e infraestrutura existente.'
    },
    {
      src: imgC,
      title: 'Engajamento Regional',
      text: 'Integração com polos produtivos e corredores logísticos estratégicos.'
    },
    {
      src: imgD,
      title: 'Capacidade Instalada',
      text: 'Avaliação de áreas, utilidades e interfaces para projetos de H₂V.'
    },
    {
      src: imgE,
      title: 'Diálogos Energia e Futuro',
      text: 'Debates sobre descarbonização e competitividade com atores-chave do RS.'
    },
    {
      src: imgF,
      title: 'H2V Mob em Ação',
      text: 'Do projeto ao fornecimento: produção, armazenamento, abastecimento e comercialização.'
    }
  ], [])

  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timerRef.current)
  }, [paused, slides.length])

  const goTo = (i) => setIndex((i + slides.length) % slides.length)

  return (
    <section id="carrossel" className="relative py-16 md:py-24 bg-white border-y-2 border-h2v-green/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-poppins text-h2v-blue">Bastidores do Projeto</h2>
            <p className="text-gray-700 font-inter mt-2">Momentos que contam a história da H2V Mob em campo</p>
          </div>
          {/* Controles removidos por solicitação */}
        </div>

        <div
          className="relative rounded-xl overflow-hidden shadow-xl bg-h2v-blue h-[220px] md:h-[300px] lg:h-[360px] max-w-5xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={slides[index].src}
              src={slides[index].src}
              alt={slides[index].title}
              className="absolute inset-0 w-full h-full object-contain"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.2 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-h2v-blue/50 via-h2v-blue/10 to-transparent" />

          <div className="absolute left-0 right-0 bottom-0 p-6 md:p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold font-poppins">{slides[index].title}</h3>
            <p className="mt-2 text-white/90 max-w-3xl font-inter">{slides[index].text}</p>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir para slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all ${i === index ? 'w-8 bg-h2v-green' : 'w-2 bg-white/60 hover:bg-white'}`}
              />
            ))}
          </div>

          {/* Setas laterais removidas por solicitação */}
        </div>
      </div>
    </section>
  )
}

export default CarrosselInstitucional


