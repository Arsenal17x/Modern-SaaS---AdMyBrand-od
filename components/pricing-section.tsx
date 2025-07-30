"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Star, Zap, Crown } from "lucide-react"
import { SectionContainer } from "@/components/section-container"

const pricingTiers = [
  {
    name: "Starter",
    monthly: 29,
    yearly: 290, // Save ~15%
    description: "Perfect for small businesses and startups",
    icon: Zap,
    features: [
      "AI Content Generation (1,000 words/month)",
      "Basic Analytics Dashboard",
      "5 Campaign Templates",
      "Email Support",
      "1 Brand Profile",
      "Social Media Scheduling",
    ],
    popular: false,
    buttonText: "Start Free Trial",
  },
  {
    name: "Professional",
    monthly: 79,
    yearly: 790, // Save ~15%
    description: "Ideal for growing marketing teams",
    icon: Star,
    features: [
      "AI Content Generation (10,000 words/month)",
      "Advanced Analytics & Insights",
      "Unlimited Campaign Templates",
      "Priority Support",
      "5 Brand Profiles",
      "Multi-channel Automation",
      "Team Collaboration Tools",
    ],
    popular: true,
    buttonText: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: 199,
    description: "For large organizations and agencies",
    icon: Crown,
    features: [
      "Unlimited AI Content Generation",
      "Custom Analytics & Reporting",
      "Dedicated Account Manager",
      "Unlimited Brand Profiles",
      "Advanced API Access",
      "Custom Integrations",
      "SSO & Advanced Security",
    ],
    popular: false,
    buttonText: "Contact Sales",
    isCustom: true,
  },
]

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <SectionContainer id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Give your marketing team
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" superpowers"}
            </span>
          </h2>
          
          {/* Logos */}
          <div className="flex justify-center items-center space-x-8 mb-12 opacity-80">
            <div className="text-white/80 text-sm font-medium">Trusted by the best marketing teams</div>
          </div>
          <div className="flex justify-center items-center space-x-12 mb-16 opacity-80">
            <div className="text-white/60 font-bold text-lg">SANITY</div>
            <div className="text-white/60 font-bold text-lg">Raycast</div>
            <div className="text-white/60 font-bold text-lg">Sketch</div>
            <div className="text-white/60 font-bold text-lg">Laravel</div>
            <div className="text-white/60 font-bold text-lg">Galileo</div>
          </div>
        </motion.div>

        {/* Toggle Switch */}
          <div className="flex justify-center items-center mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/20">
              <div className="flex">
                <button
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    !isYearly ? "bg-white/20 text-white" : "text-white/70 hover:text-white"
                  }`}
                  onClick={() => setIsYearly(false)}
                >
                  Monthly
                </button>
                <button
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
                    isYearly ? "bg-white/20 text-white" : "text-white/70 hover:text-white"
                  }`}
                  onClick={() => setIsYearly(true)}
                >
                  Yearly
                  <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">Save 15%</span>
                </button>
              </div>
            </div>
          </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative ${tier.popular ? "scale-105" : ""}`}
            >
              <div
                className={`h-full p-8 transition-all duration-300 hover:scale-105 border-2 rounded-xl flex flex-col ${
                  tier.popular
                    ? "bg-gradient-to-b from-green-500/10 to-green-600/5 border-green-500/50 shadow-2xl shadow-green-500/20"
                    : "bg-white/5 border-white/10 hover:border-white/20"
                } backdrop-blur-sm`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-green-500 text-white py-1 rounded-full text-sm font-medium border-0 px-4 mx-0 my-0">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-white/80 mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    {tier.isCustom ? (
                      <span className="text-4xl font-bold text-white">Custom</span>
                    ) : (
                      <>
                        <span className="text-4xl font-bold text-white">
                          ${isYearly ? tier.yearly : tier.monthly}
                        </span>
                        <span className="text-white/60 ml-2">/user/{isYearly ? "year" : "month"}</span>
                      </>
                    )}
                  </div>
                  <p className="text-white/70 text-sm">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full mt-auto ${
                    tier.popular
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : "bg-white/10 hover:bg-white/20 border border-white/30 text-white"
                  } py-3 font-medium`}
                  size="lg"
                  onClick={() => {
                    if (tier.buttonText === "Contact Sales") {
                      const target = document.querySelector('#contact')
                      if (target) {
                        target.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start'
                        })
                      }
                    }
                  }}
                >
                  {tier.buttonText}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-white/70 mb-4">Early stage? Check out our startup program for 50% off</p>
        </motion.div>
      </div>
    </SectionContainer>
  )
}
