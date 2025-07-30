"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp } from "lucide-react"

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  
  // Animation variants for the icon and text
  const iconVariants = {
    initial: { y: 0 },
    hover: { y: "-150%" },
  }

  const textVariants = {
    initial: { opacity: 0, y: 15 },
    hover: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
  }

return (
  <AnimatePresence>
    {isVisible && (
      <motion.button
        layout
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 25 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        onClick={scrollToTop}
        onMouseEnter={() => {
          if (window.innerWidth >= 768) setIsHovered(true);
        }}
        onMouseLeave={() => {
          if (window.innerWidth >= 768) setIsHovered(false);
        }}
        aria-label="Back to top"
        className={`fixed bottom-8 right-8 z-50 flex items-center justify-center overflow-hidden border-none text-white transition-all duration-300 ease-in-out
          ${
            isHovered
              ? // Hover styles only for medium and up
                "w-12 h-12 md:w-36 md:h-12 rounded-full md:bg-gradient-to-r md:from-indigo-500 md:via-purple-500 md:to-blue-500 md:shadow-[0_0_8px_2px_rgba(129,140,248,0.35)]"
              : "w-12 h-12 rounded-full bg-gradient-to-tr from-neutral-800 via-indigo-900 to-neutral-800 shadow-[0_0_6px_4px_rgba(99,102,241,0.25)]"
          }
        `}
      >
        {/* Icon */}
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute"
        >
          <ChevronUp className="h-5 w-5" />
        </motion.div>

        {/* Text only for medium and up */}
        <AnimatePresence>
          {isHovered && window.innerWidth >= 768 && (
            <motion.span
              key="text"
              variants={textVariants}
              initial="initial"
              animate="hover"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="hidden md:inline text-sm font-medium"
            >
              Back to Top
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    )}
  </AnimatePresence>
)

}