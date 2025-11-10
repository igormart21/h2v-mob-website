import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const formatLabel = (filepath) => {
  const filename = filepath.split('/').pop() || ''
  return filename.replace(/\.[^/.]+$/, '').replace(/_/g, ' ')
}

const Feira = () => {
  const imageImports = import.meta.glob('../assets/imagens-feira/*.{jpeg,jpg,png,JPEG,JPG,PNG}', {
    eager: true,
    import: 'default',
  })

  const videoImports = import.meta.glob('../assets/imagens-feira/*.{mp4,MP4}', {
    eager: true,
    import: 'default',
  })

  const images = useMemo(
    () =>
      Object.entries(imageImports)
        .map(([path, src]) => ({
          src,
          title: formatLabel(path),
        }))
        .sort((a, b) => a.title.localeCompare(b.title, 'pt-BR', { numeric: true })),
    [imageImports],
  )

  const videos = useMemo(
    () =>
      Object.entries(videoImports)
        .map(([path, src]) => ({
          src,
          title: formatLabel(path),
        }))
        .sort((a, b) => a.title.localeCompare(b.title, 'pt-BR', { numeric: true })),
    [videoImports],
  )

  const [imageIndex, setImageIndex] = useState(0)
  const [videoIndex, setVideoIndex] = useState(0)
  const [videoAspectRatio, setVideoAspectRatio] = useState(16 / 9)
  const imageTimerRef = useRef(null)
  const videoTimerRef = useRef(null)
  const [modalMedia, setModalMedia] = useState(null)
  const modalVideoRef = useRef(null)

  useEffect(() => {
    if (images.length === 0) return
    imageTimerRef.current = setInterval(() => {
      setImageIndex((i) => (i + 1) % images.length)
    }, 5000)
    return () => clearInterval(imageTimerRef.current)
  }, [images.length])

  useEffect(() => {
    if (videos.length === 0) return
    videoTimerRef.current = setInterval(() => {
      setVideoIndex((i) => (i + 1) % videos.length)
    }, 7000)
    return () => clearInterval(videoTimerRef.current)
  }, [videos.length])

  const handleVideoMetadata = (event) => {
    const video = event.currentTarget
    const { videoWidth, videoHeight } = video
    if (videoWidth && videoHeight) {
      setVideoAspectRatio(videoWidth / videoHeight)
    }
    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // autoplay restrito; mantém controles para o usuário iniciar manualmente
      })
    }
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setModalMedia(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (modalMedia?.type === 'video' && modalVideoRef.current) {
      modalVideoRef.current.currentTime = 0
      const playPromise = modalVideoRef.current.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // navegadores podem bloquear autoplay com áudio; usuário pode apertar play manualmente
        })
      }
    }
  }, [modalMedia])

  return (
    <section
      id="feira"
      className="relative py-16 md:py-24 bg-gradient-to-br from-h2v-blue via-h2v-blue/90 to-h2v-blue border-y-2 border-h2v-green/20 text-white"
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-poppins">
            H₂V Mob na Feira
          </h2>
          <p className="text-white/80 font-inter mt-3 md:text-lg max-w-3xl mx-auto">
            Registro completo em fotos e vídeos da apresentação do projeto na feira
          </p>
        </motion.div>

        {images.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl md:text-3xl font-bold font-poppins">
                Galeria de Fotos
              </h3>
              <span className="text-sm text-white/60 font-inter">{`Foto ${
                imageIndex + 1
              } de ${images.length}`}</span>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-xl bg-white/10 w-full max-w-4xl md:max-w-5xl mx-auto h-[240px] md:h-[360px] lg:h-[460px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={images[imageIndex].src}
                  src={images[imageIndex].src}
                  alt={images[imageIndex].title}
                  className="absolute inset-0 w-full h-full object-contain bg-white cursor-zoom-in"
                  onClick={() =>
                    setModalMedia({
                      type: 'image',
                      src: images[imageIndex].src,
                      title: images[imageIndex].title,
                    })
                  }
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0.3 }}
                  transition={{ duration: 0.6 }}
                />
              </AnimatePresence>
            </div>

            <div className="mt-4 flex justify-center gap-2 flex-wrap">
              {images.map((_, i) => (
                <button
                  key={`foto-${i}`}
                  aria-label={`Ir para foto ${i + 1}`}
                  onClick={() => setImageIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === imageIndex ? 'w-8 bg-h2v-green' : 'w-2 bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {videos.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl md:text-3xl font-bold font-poppins">
                Galeria de Vídeos
              </h3>
              <span className="text-sm text-white/60 font-inter">{`Vídeo ${
                videoIndex + 1
              } de ${videos.length}`}</span>
            </div>

            <div
              className="relative rounded-xl overflow-hidden shadow-xl bg-black/60 w-full max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto h-[220px] md:h-[320px] lg:h-[420px]"
              style={{ aspectRatio: videoAspectRatio }}
            >
              <AnimatePresence mode="wait">
                <motion.video
                  key={videos[videoIndex].src}
                  className="absolute inset-0 w-full h-full object-contain bg-black cursor-zoom-in"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  onLoadedMetadata={handleVideoMetadata}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0.3 }}
                  transition={{ duration: 0.6 }}
                  onClick={() =>
                    setModalMedia({
                      type: 'video',
                      src: videos[videoIndex].src,
                      title: videos[videoIndex].title,
                    })
                  }
                  preload="auto"
                >
                  <source src={videos[videoIndex].src} type="video/mp4" />
                </motion.video>
              </AnimatePresence>
            </div>

            <div className="mt-4 flex justify-center gap-2 flex-wrap">
              {videos.map((_, i) => (
                <button
                  key={`video-${i}`}
                  aria-label={`Ir para vídeo ${i + 1}`}
                  onClick={() => setVideoIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === videoIndex ? 'w-8 bg-h2v-green' : 'w-2 bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <AnimatePresence>
        {modalMedia && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalMedia(null)}
          >
            <motion.div
              className="max-w-[90vw] max-h-[85vh] w-full flex flex-col items-center px-4"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="self-end mb-2">
                <button
                  onClick={() => setModalMedia(null)}
                  className="text-white/80 hover:text-white text-sm font-inter px-3 py-1 border border-white/30 rounded-full"
                >
                  Fechar
                </button>
              </div>
              {modalMedia.type === 'image' ? (
                <img
                  src={modalMedia.src}
                  alt={modalMedia.title}
                  className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
                />
              ) : (
                <video
                  ref={modalVideoRef}
                  src={modalMedia.src}
                  controls
                  autoPlay
                  muted
                  playsInline
                  preload="auto"
                  className="max-w-full max-h-[75vh] rounded-lg shadow-2xl"
                />
              )}
              <p className="text-white/70 font-inter text-sm mt-4 text-center">
                {modalMedia.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Feira


