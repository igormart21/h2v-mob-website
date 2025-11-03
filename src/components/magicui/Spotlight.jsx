import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

export function Spotlight({ className, size = 200 }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn("group relative", className)}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, rgba(0,200,150,0.15), transparent 40%)`,
        }}
      />
    </div>
  )
}

