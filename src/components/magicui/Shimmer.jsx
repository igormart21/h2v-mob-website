import { cn } from "../../lib/utils"

export function Shimmer({ className }) {
  return (
    <div
      className={cn(
        "absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#00C8960a_1px,transparent_1px),linear-gradient(to_bottom,#00C8960a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#002B45_70%,transparent_100%)]",
        className
      )}
    />
  )
}

