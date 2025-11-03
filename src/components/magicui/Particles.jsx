import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

export function Particles({ className, quantity = 30, staticity = 50, ease = 50, refresh = false }) {
  const canvasRef = useRef(null)
  const canvasContainerRef = useRef(null)
  const particles = useRef([])
  const animationFrameId = useRef(null)

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")
      let canvasWidth = canvasContainerRef.current.clientWidth
      let canvasHeight = canvasContainerRef.current.clientHeight

      canvas.width = canvasWidth
      canvas.height = canvasHeight

      const particleArray = []
      for (let i = 0; i < quantity; i++) {
        const x = Math.random() * canvasWidth
        const y = Math.random() * canvasHeight
        const size = Math.random() * 2
        const speedX = Math.random() * 0.5 - 0.25
        const speedY = Math.random() * 0.5 - 0.25

        particleArray.push({ x, y, size, speedX, speedY })
      }
      particles.current = particleArray

      const animate = () => {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight)
        particleArray.forEach((particle, i) => {
          particle.x += particle.speedX
          particle.y += particle.speedY

          if (particle.x > canvasWidth) particle.x = 0
          if (particle.x < 0) particle.x = canvasWidth
          if (particle.y > canvasHeight) particle.y = 0
          if (particle.y < 0) particle.y = canvasHeight

          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fillStyle = "rgba(0, 200, 150, 0.3)"
          ctx.fill()

          // Connect nearby particles
          particleArray.slice(i + 1).forEach((p2) => {
            const dx = particle.x - p2.x
            const dy = particle.y - p2.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 120) {
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(p2.x, p2.y)
              ctx.strokeStyle = `rgba(0, 200, 150, ${0.2 * (1 - distance / 120)})`
              ctx.lineWidth = 0.5
              ctx.stroke()
            }
          })
        })

        animationFrameId.current = requestAnimationFrame(animate)
      }

      animate()

      const handleResize = () => {
        canvasWidth = canvasContainerRef.current.clientWidth
        canvasHeight = canvasContainerRef.current.clientHeight
        canvas.width = canvasWidth
        canvas.height = canvasHeight
      }

      window.addEventListener("resize", handleResize)

      return () => {
        window.removeEventListener("resize", handleResize)
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current)
        }
      }
    }
  }, [quantity, refresh])

  return (
    <div
      ref={canvasContainerRef}
      className={cn("absolute inset-0", className)}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  )
}

