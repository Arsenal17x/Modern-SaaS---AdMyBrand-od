"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "API", href: "/api" },
    { name: "Integrations", href: "/integrations" },
  ],
  company: [
    { name: "About", href: "#about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
  ],
  support: [
    { name: "Help Center", href: "/help" },
    { name: "Contact", href: "#contact" },
    { name: "Status", href: "/status" },
    { name: "Community", href: "/community" },
  ],
  legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Security", href: "/security" },
    { name: "Cookies", href: "/cookies" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
]

export default function Footer() {
  return (
    <footer className="relative bg-black/20 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AI</span>
                </div>
                <span className="text-white font-bold text-xl">ADmyBRAND</span>
              </div>
              <p className="text-white/70 mb-6 max-w-sm">
                Transform your marketing with AI-powered tools that deliver real results. Join thousands of businesses
                already growing with ADmyBRAND.
              </p>

              {/* Contact Info */}
              <div className="space-y-2 text-sm text-white/60">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  hello@admybrand.ai
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  San Francisco, CA
                </div>
              </div>
            </motion.div>
          </div>

          {/* Wrapper for link sections */}
<div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
  {Object.entries(footerLinks).map(([category, links], index) => (
    <motion.div
      key={category}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <h3 className="text-white font-semibold mb-4 capitalize">{category}</h3>
      <ul className="space-y-2">
        {links.map((link, linkIndex) => (
          <li key={link.name}>
            <motion.a
              href={link.href}
              className="block text-white/60 hover:text-white transition-colors duration-300"
              whileHover={{ x: 8 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: linkIndex * 0.03, // slight stagger for wave feel
              }}
            >
              {link.name}
            </motion.a>
          </li>
        ))}
      </ul>
    </motion.div>
  ))}
</div>

        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white/60 text-sm mb-4 md:mb-0">© 2024 ADmyBRAND. All rights reserved.</p>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5 text-white/70 hover:text-white" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
