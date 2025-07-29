"use client"

import { motion } from "framer-motion"
import { SectionContainer } from "./section-container"
import { GlassCard } from "./glass-card"
import { Brain, Target, Rocket, Users, Lightbulb, TrendingUp, Award, Globe, Zap, Heart } from "lucide-react"

const stats = [
  { number: "10K+", label: "Happy Clients", icon: Users },
  { number: "50M+", label: "AI Campaigns", icon: Rocket },
  { number: "99.9%", label: "Uptime", icon: TrendingUp },
  { number: "24/7", label: "Support", icon: Heart },
]

const values = [
  {
    icon: Brain,
    title: "AI-Powered Innovation",
    description:
      "We harness cutting-edge artificial intelligence to revolutionize how brands connect with their audiences.",
  },
  {
    icon: Target,
    title: "Precision Marketing",
    description: "Our algorithms analyze millions of data points to deliver hyper-targeted campaigns that convert.",
  },
  {
    icon: Lightbulb,
    title: "Creative Excellence",
    description: "We blend AI efficiency with human creativity to produce campaigns that inspire and engage.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "From startups to enterprises, we help brands scale their marketing efforts across all channels.",
  },
]

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    description: "Former Google AI researcher with 10+ years in machine learning and marketing automation.",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-Founder",
    description: "Ex-Tesla engineer specializing in scalable AI systems and real-time data processing.",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Emily Watson",
    role: "Head of Marketing",
    description: "Award-winning marketer who's helped 500+ brands achieve 10x growth through AI-driven strategies.",
    image: "/placeholder-user.jpg",
  },
]

export function AboutSection() {
  return (
    <SectionContainer id="about" className="py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6"
          >
            <Zap className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              ADmyBRAND
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing digital marketing with AI-powered solutions that help brands create meaningful
            connections with their audiences at scale.
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
            <p className="text-lg text-white/90 leading-relaxed max-w-4xl mx-auto">
              To democratize advanced marketing technology by making AI-powered brand building accessible to businesses
              of all sizes. We believe every brand deserves the tools to tell their story effectively and reach their
              ideal customers with precision.
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
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <GlassCard className="p-6 text-center group hover:bg-white/10 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:text-pink-400 transition-colors duration-300" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* What We Do */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">What We Do</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <GlassCard className="p-8 h-full group hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                        {value.title}
                      </h4>
                      <p className="text-white/80 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
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
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Meet Our Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <GlassCard className="p-8 text-center group hover:bg-white/10 transition-all duration-300">
                  <div className="relative mb-6">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-purple-500/30 group-hover:border-pink-500/50 transition-all duration-300"
                    />
                    <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-to-r from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300"></div>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {member.name}
                  </h4>
                  <p className="text-purple-400 font-medium mb-4">{member.role}</p>
                  <p className="text-white/80 text-sm leading-relaxed">{member.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <GlassCard className="p-8 md:p-12">
            <Award className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to Transform Your Brand?</h3>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of successful brands who trust ADmyBRAND to power their marketing success with cutting-edge
              AI technology.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Journey Today
            </motion.button>
          </GlassCard>
        </motion.div>
      </div>
    </SectionContainer>
  )
}
