import type React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-300",
        className,
      )}
    >
      {children}
    </div>
  )
}
