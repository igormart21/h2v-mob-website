import { cn } from "../../lib/utils"

export function BorderBeam({ className, size = 200, duration = 15, anchor = 90, borderWidth = 1.5, delay = 0, colorFrom = "#00C896", colorTo = "#002B45" }) {
  return (
    <div
      style={
        {
          "--size": size,
          "--duration": duration,
          "--anchor": anchor,
          "--border-width": borderWidth,
          "--delay": `-${delay}s`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
        } 
      }
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",
        // mask styles - usando azul escuro do tema em vez de preto
        "[background:linear-gradient(transparent,transparent),linear-gradient(#002B45,#002B45)] [background-clip:padding-box,border-box] [background-origin:border-box]",
        // pseudo styles
        "before:absolute before:aspect-square before:w-[calc(var(--size)*1px)] before:animate-border-beam before:[animation-delay:var(--delay)] before:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] before:[offset-anchor:calc(var(--anchor)*1%)_50%] before:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]",
        // light style
        "after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(circle_at_50%_50%,rgba(0,200,150,0.3),rgba(0,200,150,0),70%)] after:[border:calc(var(--border-width)*1px)_solid_transparent]",
        className,
      )}
    />
  )
}

