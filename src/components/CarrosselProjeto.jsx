import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import img1 from '../assets/WhatsApp Image 2025-11-04 at 07.04.40.jpeg'
import img2 from '../assets/WhatsApp Image 2025-11-04 at 07.04.41 (1).jpeg'
import img3 from '../assets/WhatsApp Image 2025-11-04 at 07.04.41 (2).jpeg'
import img4 from '../assets/WhatsApp Image 2025-11-04 at 07.04.41.jpeg'

const CarrosselProjeto = () => {
  const slides = useMemo(() => [
    { src: img1, title: 'Projeto com Ônibus H₂' },
    { src: img2, title: 'Projeto com Ônibus H₂' },
    { src: img3, title: 'Projeto com Ônibus H₂' },
    { src: img4, title: 'Projeto com Ônibus H₂' },
  ], [])

  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [aspectRatio, setAspectRatio] = useState(16 / 9)
  const timerRef = useRef(null)

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timerRef.current)
  }, [paused, slides.length])

  const goTo = (i) => setIndex((i + slides.length) % slides.length)

  const handleImageLoad = (e) => {
    const { naturalWidth, naturalHeight } = e.currentTarget
    if (naturalWidth && naturalHeight) {
      setAspectRatio(naturalWidth / naturalHeight)
    }
  }

  return (
    <section id="projeto-galeria" className="relative py-16 md:py-24 bg-white border-y-2 border-h2v-green/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-poppins text-h2v-blue">Projeto com Ônibus H₂</h2>
            <p className="text-gray-700 font-inter mt-2">Galeria do projeto com registros recentes</p>
          </div>
        </div>

        <div
          className="relative rounded-xl overflow-hidden shadow-xl bg-h2v-blue w-full max-w-6xl mx-auto"
          style={{ aspectRatio }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={slides[index].src}
              src={slides[index].src}
              alt={slides[index].title}
              className="absolute inset-0 w-full h-full object-contain"
              onLoad={handleImageLoad}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.2 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-h2v-blue/40 via-h2v-blue/10 to-transparent" />

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
        </div>
      </div>
    </section>
  )
}

export default CarrosselProjeto


