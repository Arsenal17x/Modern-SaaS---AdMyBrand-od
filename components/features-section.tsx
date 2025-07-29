"use client"

import { motion } from "framer-motion"
import { SectionContainer } from "./section-container"
import { GlassCard } from "./glass-card"
import { Brain, Target, BarChart3, Zap, Users, Palette, MessageSquare, Calendar, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI Content Generation",
    description:
      "Create compelling copy, headlines, and social media posts with our advanced AI engine trained on high-converting marketing content.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Target,
    title: "Smart Audience Targeting",
    description:
      "Leverage machine learning to identify and target your ideal customers with precision, maximizing your campaign effectiveness.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Get deep insights into your marketing performance with AI-powered analytics that reveal what's working and what's not.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Zap,
    title: "Campaign Automation",
    description:
      "Automate your entire marketing funnel with intelligent workflows that adapt and optimize based on real-time performance data.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Users,
    title: "Customer Journey Mapping",
    description:
      "Visualize and optimize every touchpoint in your customer's journey with AI-driven insights and recommendations.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Palette,
    title: "Creative Asset Generation",
    description:
      "Generate stunning visuals, logos, and design elements that align with your brand using our AI-powered creative suite.",
    color: "from-pink-500 to-rose-500",
  },
]

const additionalFeatures = [
  {
    icon: MessageSquare,
    title: "Multi-Channel Messaging",
    description: "Unified messaging across email, SMS, social media, and more",
  },
  { icon: Calendar, title: "Smart Scheduling", description: "AI-optimized posting times for maximum engagement" },
  { icon: TrendingUp, title: "Predictive Analytics", description: "Forecast campaign performance and market trends" },
]

export default function FeaturesSection() {
  return (
    <SectionContainer id="features" className="py-24">
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

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <GlassCard className="p-6 h-full hover:bg-white/10 transition-all duration-300">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <GlassCard className="p-4 hover:bg-white/5 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <feature.icon className="w-8 h-8 text-purple-400 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium mb-1">{feature.title}</h4>
                    <p className="text-white/60 text-sm">{feature.description}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  )
}
