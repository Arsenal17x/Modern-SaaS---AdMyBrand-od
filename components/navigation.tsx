"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-purple-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 relative">
          <div className="flex-shrink-0">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white font-bold text-sm">AI</span>
              </motion.div>
              <span className="text-white font-bold text-xl group-hover:text-purple-300 transition-colors duration-300">
                ADmyBRAND
              </span>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <a
                  href={item.href}
                  className="text-white text-medium font-medium no-underline relative block py-2 px-3 transition-colors duration-300 hover:text-white"
                  onClick={(e) => {
                      e.preventDefault()
                      const target = document.querySelector(item.href)
                      if (target) {
                        setTimeout(() => {
                          target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                          })
                        }, 300)
                      }
                    }}
                >
                  {item.name}
                  {/* CSS-style underline effect using Tailwind */}
                  <span className="absolute left-0 bottom-0 h-0.5 w-full scale-x-0 origin-left bg-cyan-400 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </a>
              </motion.div>
            ))}
          </div>
          
          
          {/* Right: Optional future content e.g. Theme toggle, user icon */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Auth Buttons */}
            <div className="flex items-center space-x-3">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  className="text-white hover:text-white hover:bg-white/10 border-0 transition-all duration-300"
                  onClick={() => (window.location.href = "/signin")}
                >
                  Sign In
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(168, 85, 247, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 transition-all duration-300"
                  onClick={() => (window.location.href = "/signup")}
                >
                  Sign Up
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.div whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:bg-white/10 transition-all duration-300"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/10 backdrop-blur-xl rounded-2xl mt-2 p-6 border border-white/20 shadow-xl"
            >
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block py-3 px-4 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                    onClick={(e) => {
                    e.preventDefault()
                    setIsMobileMenuOpen(false)
                    const target = document.querySelector(item.href)
                    if (target) {
                      setTimeout(() => {
                        target.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start'
                        })
                      }, 300)
                    }
                  }}

                    whileHover={{ x: 10 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <div className="border-t border-white/20 pt-4 space-y-3">
                 <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center" // Ensures horizontal centering
                  >
                    <Button
                      variant="ghost"
                      className="w-full text-white border border-white/30 hover:text-white hover:bg-white/10 rounded-lg px-6 py-2"
                      onClick={() => (window.location.href = "/signin")}
                    >
                      Sign In
                    </Button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
                      onClick={() => (window.location.href = "/signup")}
                    >
                      Sign Up
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
