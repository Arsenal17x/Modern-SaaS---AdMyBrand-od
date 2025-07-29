"use client"

import { motion } from "framer-motion"
import { SectionContainer } from "./section-container"
import { GlassCard } from "./glass-card"
import { Users, Target, Zap, Award, TrendingUp, Globe } from "lucide-react"

const stats = [
  { number: "10,000+", label: "Active Users", icon: Users },
  { number: "500M+", label: "Content Generated", icon: Zap },
  { number: "98%", label: "Customer Satisfaction", icon: Award },
  { number: "150+", label: "Countries Served", icon: Globe },
]

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're committed to democratizing AI-powered marketing tools for businesses of all sizes.",
  },
  {
    icon: TrendingUp,
    title: "Innovation First",
    description: "Constantly pushing the boundaries of what's possible with AI and machine learning.",
  },
  {
    icon: Users,
    title: "Customer-Centric",
    description: "Every feature we build is designed with our users' success and growth in mind.",
  },
]

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    image: "/placeholder-user.jpg",
    bio: "Former VP of Marketing at TechCorp with 15+ years in AI and marketing automation.",
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-Founder",
    image: "/placeholder-user.jpg",
    bio: "Ex-Google AI researcher specializing in natural language processing and machine learning.",
  },
  {
    name: "Emily Watson",
    role: "Head of Product",
    image: "/placeholder-user.jpg",
    bio: "Product leader with expertise in user experience and AI-driven marketing solutions.",
  },
]

export default function AboutSection() {
  return (
    <SectionContainer id="about" className="py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              ADmyBRAND
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We're on a mission to empower every business with AI-driven marketing tools that deliver real results.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <GlassCard className="p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-lg text-white/80 max-w-4xl mx-auto leading-relaxed">
              At ADmyBRAND, we believe that every business deserves access to powerful AI marketing tools. We're
              democratizing advanced marketing automation, making it accessible, affordable, and effective for companies
              of all sizes. Our platform combines cutting-edge AI technology with intuitive design to help you create,
              optimize, and scale your marketing efforts like never before.
            </p>
          </GlassCard>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <GlassCard className="p-6 text-center">
                <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <GlassCard className="p-6 h-full">
                  <value.icon className="w-12 h-12 text-purple-400 mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-3">{value.title}</h4>
                  <p className="text-white/70">{value.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <GlassCard className="p-6 text-center">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="text-xl font-semibold text-white mb-1">{member.name}</h4>
                  <p className="text-purple-300 mb-3">{member.role}</p>
                  <p className="text-white/70 text-sm">{member.bio}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-8 md:p-12 text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/30">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to Transform Your Marketing?</h3>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using ADmyBRAND to revolutionize their marketing strategies with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </SectionContainer>
  )
}
