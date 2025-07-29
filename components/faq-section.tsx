"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionContainer } from "./section-container"
import { GlassCard } from "./glass-card"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "How does ADmyBRAND's AI technology work?",
    answer:
      "Our AI uses advanced machine learning algorithms trained on millions of successful marketing campaigns. It analyzes your brand, audience, and goals to generate personalized content, optimize targeting, and continuously improve performance based on real-time data.",
  },
  {
    question: "Can I integrate ADmyBRAND with my existing marketing tools?",
    answer:
      "ADmyBRAND integrates seamlessly with over 100+ popular marketing tools including Google Ads, Facebook Ads, HubSpot, Salesforce, Mailchimp, and many more. Our API also allows for custom integrations.",
  },
  {
    question: "What kind of results can I expect?",
    answer:
      "Our clients typically see a 200-400% increase in conversion rates, 50-80% reduction in cost per acquisition, and 10x faster campaign creation. Results vary based on industry and current marketing maturity, but improvements are usually visible within the first month.",
  },
  {
    question: "Is my data secure with ADmyBRAND?",
    answer:
      "Security is our top priority. We're SOC 2 Type II certified, GDPR compliant, and use enterprise-grade encryption. Your data is never shared with third parties and is stored in secure, geographically distributed data centers.",
  },
  {
    question: "Do I need technical expertise to use ADmyBRAND?",
    answer:
      "Not at all! ADmyBRAND is designed for marketers, not developers. Our intuitive interface makes it easy for anyone to create, launch, and optimize campaigns. We also provide comprehensive onboarding and 24/7 support.",
  },
  {
    question: "What's included in the free trial?",
    answer:
      "The 14-day free trial includes full access to all Professional plan features: unlimited campaigns, advanced AI tools, analytics, A/B testing, and priority support. No credit card required to start.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time with no penalties or hidden fees. If you cancel, you'll continue to have access to your account until the end of your current billing period.",
  },
  {
    question: "How does pricing work for team members?",
    answer:
      "Team member limits are based on your plan: Starter (1 member), Professional (up to 10 members), Enterprise (unlimited). Additional team members on Professional plans are $15/month each.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <SectionContainer id="faq" className="py-24">
      <div className="max-w-4xl mx-auto">
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
            <HelpCircle className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Everything you need to know about ADmyBRAND. Can't find what you're looking for? Contact our support team.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="overflow-hidden">
                <motion.button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                  whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-white/60" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pl-18">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-white/60 mb-4">Still have questions?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </SectionContainer>
  )
}
