import type React from "react"
import { cn } from "@/lib/utils"

interface SectionContainerProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function SectionContainer({ children, className, id }: SectionContainerProps) {
  return (
    <section id={id} className={cn("px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </section>
  )
}
