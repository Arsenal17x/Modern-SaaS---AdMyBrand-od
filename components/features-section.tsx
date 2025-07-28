"use client"

import { motion } from "framer-motion"
import { Brain, BarChart3, Palette, MessageSquare, Target, Zap, Users, Shield } from "lucide-react"
import { GlassCard } from "@/components/glass-card"
import { SectionContainer } from "@/components/section-container"

const features = [
  {
    icon: Brain,
    title: "AI Content Generation",
    description:
      "Create compelling copy, headlines, and social media content with advanced AI that understands your brand voice.",
    color: "text-purple-400",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description:
      "Get actionable insights with AI-powered analytics that predict campaign performance and optimize ROI.",
    color: "text-blue-400",
  },
  {
    icon: Palette,
    title: "Brand Design Studio",
    description: "Generate on-brand visuals, logos, and marketing materials with our intelligent design system.",
    color: "text-pink-400",
  },
  {
    icon: MessageSquare,
    title: "Automated Campaigns",
    description: "Set up multi-channel campaigns that run themselves, adapting to audience behavior in real-time.",
    color: "text-green-400",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "AI-driven audience segmentation finds your ideal customers across all marketing channels.",
    color: "text-orange-400",
  },
  {
    icon: Zap,
    title: "Lightning Fast Setup",
    description: "Launch professional campaigns in minutes, not weeks, with our intuitive AI-guided workflow.",
    color: "text-yellow-400",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamlessly collaborate with your team using built-in approval workflows and real-time editing.",
    color: "text-indigo-400",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with SOC 2 compliance ensures your data and campaigns are always protected.",
    color: "text-red-400",
  },
]

export function FeaturesSection() {
  return (
    <SectionContainer id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Modern Marketers
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Everything you need to create, manage, and optimize your marketing campaigns with the power of AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-6 h-full hover:scale-105 transition-transform duration-300">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4`}
                >
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}
