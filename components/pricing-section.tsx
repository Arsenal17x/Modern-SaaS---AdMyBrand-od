"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SectionContainer } from "./section-container"
import { GlassCard } from "./glass-card"
import { Check, Star, Zap } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: { monthly: 29, yearly: 290 },
    description: "Perfect for small businesses and startups",
    features: [
      "Up to 5 campaigns",
      "Basic AI content generation",
      "Email support",
      "Standard analytics",
      "1 team member",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: { monthly: 99, yearly: 990 },
    description: "Ideal for growing businesses",
    features: [
      "Unlimited campaigns",
      "Advanced AI features",
      "Priority support",
      "Advanced analytics",
      "Up to 10 team members",
      "A/B testing",
      "Custom integrations",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: { monthly: 299, yearly: 2990 },
    description: "For large organizations",
    features: [
      "Everything in Professional",
      "Custom AI models",
      "Dedicated support",
      "White-label options",
      "Unlimited team members",
      "Advanced security",
      "Custom reporting",
    ],
    popular: false,
  },
]

const companies = [
  { name: "TechCorp", logo: "/placeholder-logo.svg" },
  { name: "StartupX", logo: "/placeholder-logo.svg" },
  { name: "GrowthCo", logo: "/placeholder-logo.svg" },
  { name: "ScaleUp", logo: "/placeholder-logo.svg" },
  { name: "InnovateLab", logo: "/placeholder-logo.svg" },
  { name: "FutureTech", logo: "/placeholder-logo.svg" },
]

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <SectionContainer id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include our core AI features with no hidden fees.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-lg ${!isYearly ? "text-white" : "text-white/60"}`}>Monthly</span>
            <motion.button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                isYearly ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-white/20"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg"
                animate={{ x: isYearly ? 36 : 4 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            <span className={`text-lg ${isYearly ? "text-white" : "text-white/60"}`}>Yearly</span>
            {isYearly && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500 text-white text-sm px-3 py-1 rounded-full font-medium"
              >
                Save 20%
              </motion.span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <GlassCard
                className={`p-8 h-full relative ${
                  plan.popular ? "border-purple-500/50 bg-gradient-to-b from-purple-500/10 to-pink-500/10" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-white/70 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">
                      ${isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="text-white/60">/{isYearly ? "year" : "month"}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                      : "bg-white/10 hover:bg-white/20 border border-white/20"
                  } transition-all duration-300`}
                >
                  {plan.popular && <Zap className="w-4 h-4 mr-2" />}
                  Get Started
                </Button>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Trusted By */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-white/60 mb-8">Trusted by 10,000+ companies worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ opacity: 1 }}
                className="flex items-center justify-center"
              >
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  className="h-8 w-auto filter brightness-0 invert"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  )
}
