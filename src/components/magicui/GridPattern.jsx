import { cn } from "../../lib/utils"

export function GridPattern({ className, width = 40, height = 40, x = -1, y = -1, strokeDasharray = 0, ...props }) {
  const id = "grid-pattern"

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-h2v-green/10 stroke-h2v-green/20",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
            className="stroke-h2v-green/20"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}

