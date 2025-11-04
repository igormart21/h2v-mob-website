import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import vid1 from '../assets/WhatsApp Video 2025-11-04 at 07.04.41.mp4'
import vid2 from '../assets/WhatsApp Video 2025-11-04 at 07.04.42.mp4'
import vid3 from '../assets/WhatsApp Video 2025-11-04 at 07.04.42 (1).mp4'
import vid4 from '../assets/WhatsApp Video 2025-11-04 at 07.04.42 (2).mp4'
import vid5 from '../assets/WhatsApp Video 2025-11-04 at 07.04.42 (3).mp4'

const CarrosselProjetoVideos = () => {
  const slides = useMemo(() => [
    { src: vid1, title: 'Vídeo do Projeto' },
    { src: vid2, title: 'Vídeo do Projeto' },
    { src: vid3, title: 'Vídeo do Projeto' },
    { src: vid4, title: 'Vídeo do Projeto' },
    { src: vid5, title: 'Vídeo do Projeto' },
  ], [])

  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [aspectRatio, setAspectRatio] = useState(16 / 9)
  const timerRef = useRef(null)

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 7000)
    return () => clearInterval(timerRef.current)
  }, [paused, slides.length])

  const goTo = (i) => setIndex((i + slides.length) % slides.length)

  const handleLoadedMetadata = (e) => {
    const video = e.currentTarget
    if (video?.videoWidth && video?.videoHeight) {
      setAspectRatio(video.videoWidth / video.videoHeight)
    }
  }

  return (
    <section id="projeto-videos" className="relative py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-poppins text-h2v-blue">Vídeos do Projeto</h2>
            <p className="text-gray-700 font-inter mt-2">Carrossel com os vídeos do ônibus H₂</p>
          </div>
        </div>

        <div
          className="relative rounded-xl overflow-hidden shadow-xl bg-h2v-blue w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto"
          style={{ aspectRatio }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.video
              key={slides[index].src}
              src={slides[index].src}
              className="absolute inset-0 w-full h-full object-contain"
              autoPlay
              muted
              loop
              playsInline
              controls
              onLoadedMetadata={handleLoadedMetadata}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.2 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>

          <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir para vídeo ${i + 1}`}
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

export default CarrosselProjetoVideos


