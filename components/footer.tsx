"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Twitter, Linkedin, ArrowRight, Instagram, Facebook, Youtube, Globe, Mail } from "lucide-react"
import { GlassCard } from "@/components/glass-card"

const footerLinks = {
  company: [
    { name: "About us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Security", href: "#" },
    { name: "Status", href: "#" },
    { name: "Terms & privacy", href: "#" },
  ],
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "API Documentation", href: "#" },
    { name: "Integrations", href: "#" },
    { name: "Mobile App", href: "#" },
  ],
  resources: [
    { name: "Help center", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Community", href: "#" },
    { name: "Webinars", href: "#" },
    { name: "Templates", href: "#" },
  ],
  solutions: [
    { name: "Enterprise", href: "#" },
    { name: "Small business", href: "#" },
    { name: "Startups", href: "#" },
    { name: "Agencies", href: "#" },
    { name: "Freelancers", href: "#" },
  ],
}

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-400" },
  { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
  { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-500" },
  { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-600" },
  { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-500" },
]

export function Footer() {
  return (
    <footer className="relative py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <GlassCard className="p-8 md:p-12 text-center">
            <div className="max-w-2xl mx-auto">
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-4">Stay Updated with ADmyBRAND</h3>
              <p className="text-white/80 mb-8">
                Get the latest AI marketing insights, feature updates, and exclusive tips delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 py-0"
                />
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 px-6 whitespace-nowrap">
                    Subscribe
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {/* Brand */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">AI</span>
              </div>
              <span className="text-white font-bold text-2xl">ADmyBRAND</span>
            </div>

            <p className="text-white/70 mb-8 leading-relaxed">
              Empowering marketers and startups with AI-powered tools to create, optimize, and scale campaigns that
              convert.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className={`text-white/60 ${social.color} transition-all duration-300 p-2 rounded-lg hover:bg-white/10`}
                  aria-label={social.name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Language & Settings */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-white/70">
                <Globe className="w-4 h-4" />
                <span className="text-sm">English (US)</span>
              </div>
              <button className="text-white/70 hover:text-white text-sm transition-colors duration-200">
                Cookie settings
              </button>
            </div>
          </motion.div>

          {/* Link Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold text-lg mb-6">Company</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-200 text-sm block"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Product */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold text-lg mb-6">Product</h4>
              <ul className="space-y-4">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-200 text-sm block"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold text-lg mb-6">Resources</h4>
              <ul className="space-y-4">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-200 text-sm block"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold text-lg mb-6">Solutions</h4>
              <ul className="space-y-4">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-200 text-sm block"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between items-start text-right"
            >
              <motion.a
                href="#"
                className="text-white hover:text-purple-400 transition-colors duration-200 flex items-center space-x-2 font-medium text-sm"
                whileHover={{ x: 5 }}
              >
                <span>Explore more</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white/60 text-sm mb-4 md:mb-0 text-center w-full">
            © 2024 ADmyBRAND AI Suite, Inc. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
