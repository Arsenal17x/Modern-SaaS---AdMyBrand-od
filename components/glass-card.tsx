import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: ReactNode
  className?: string
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div className={cn("bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-md border border-white/20 rounded-xl shadow-xl", className)}>
      {children}
    </div>
  )
}
