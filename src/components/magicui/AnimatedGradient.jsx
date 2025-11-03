import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

export function AnimatedGradient({ className, children }) {
  return (
    <motion.div
      className={cn("relative overflow-hidden", className)}
      animate={{
        backgroundPosition: ["0% 0%", "100% 100%"],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      style={{
        backgroundImage: "linear-gradient(to right, #00C896, #002B45, #00C896)",
        backgroundSize: "200% 200%",
      }}
    >
      {children}
    </motion.div>
  )
}

