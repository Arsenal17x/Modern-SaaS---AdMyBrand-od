"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <motion.button
            onClick={scrollToTop}
            className="group relative w-12 h-12 bg-slate-800 hover:bg-purple-500 rounded-full border-4 border-purple-400/25 hover:border-purple-400/50 transition-all duration-300 overflow-hidden cursor-pointer flex items-center justify-center shadow-lg hover:shadow-purple-500/25"
            whileHover={{
              width: 140,
              borderRadius: 25,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {/* SVG Icon */}
            <motion.svg
              className="w-3 h-3 fill-white transition-transform duration-300 group-hover:-translate-y-8"
              viewBox="0 0 384 512"
            >
              <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
            </motion.svg>

            {/* Text that appears on hover */}
            <span className="absolute text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Back to Top
            </span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
