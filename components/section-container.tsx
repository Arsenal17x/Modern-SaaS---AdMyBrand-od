import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SectionContainerProps {
  children: ReactNode
  className?: string
  id?: string
}

export function SectionContainer({ children, className, id }: SectionContainerProps) {
  return (
    <section id={id} className={cn("relative px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </section>
  )
}
