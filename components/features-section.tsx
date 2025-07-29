"use client"

import { motion } from "framer-motion"
import { SectionContainer } from "./section-container"
import { GlassCard } from "./glass-card"
import { Brain, Target, BarChart3, Zap, Users, MessageSquare, Palette, Shield } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI Content Generation",
    description:
      "Create compelling copy, headlines, and creative assets using advanced AI algorithms trained on high-converting marketing content.",
  },
  {
    icon: Target,
    title: "Smart Audience Targeting",
    description:
      "Identify and reach your ideal customers with precision using machine learning-powered audience analysis and segmentation.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Get real-time insights and predictive analytics to optimize your campaigns and maximize ROI across all channels.",
  },
  {
    icon: Zap,
    title: "Automated Optimization",
    description:
      "Let AI continuously optimize your campaigns, adjusting bids, targeting, and creative elements for peak performance.",
  },
  {
    icon: Users,
    title: "Customer Journey Mapping",
    description: "Visualize and optimize every touchpoint in your customer's journey with AI-powered path analysis.",
  },
  {
    icon: MessageSquare,
    title: "Multi-Channel Campaigns",
    description:
      "Orchestrate seamless campaigns across social media, email, search, and display with unified messaging.",
  },
  {
    icon: Palette,
    title: "Brand Consistency",
    description:
      "Maintain perfect brand alignment across all marketing materials with AI-powered brand guideline enforcement.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level security with SOC 2 compliance, ensuring your marketing data and campaigns are always protected.",
  },
]

export function FeaturesSection() {
  return (
    <SectionContainer id="features" className="py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Features
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Everything you need to create, optimize, and scale your marketing campaigns with the power of artificial
            intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <GlassCard className="p-6 h-full group hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/80 leading-relaxed">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}
