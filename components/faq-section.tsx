"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { SectionContainer } from "@/components/section-container"

const faqs = [
  {
    question: "How does ADmyBRAND AI Suite work?",
    answer:
      "ADmyBRAND AI Suite uses advanced machine learning algorithms to analyze your brand, target audience, and campaign goals. It then generates personalized content, designs, and campaign strategies that align with your objectives. The AI continuously learns from your campaign performance to improve future recommendations.",
  },
  {
    question: "Can I integrate ADmyBRAND with my existing marketing tools?",
    answer:
      "Yes! ADmyBRAND integrates seamlessly with over 50+ popular marketing tools including Google Ads, Facebook Ads Manager, HubSpot, Mailchimp, Salesforce, and many more. Our API also allows for custom integrations with your existing tech stack.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "We offer a 14-day free trial for all our plans. No credit card required to get started. You'll have full access to all features during your trial period, and you can cancel anytime without any charges.",
  },
  {
    question: "How secure is my data with ADmyBRAND?",
    answer:
      "Security is our top priority. We're SOC 2 Type II compliant and use enterprise-grade encryption for all data transmission and storage. Your data is never shared with third parties, and we follow strict privacy protocols to ensure your information remains confidential.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We provide comprehensive support including 24/7 chat support, email support, extensive documentation, video tutorials, and webinar training sessions. Enterprise customers also get dedicated account managers and priority support.",
  },
  {
    question: "Can I customize the AI-generated content?",
    answer:
      "Yes! All AI-generated content is fully customizable. You can edit, refine, and adjust any content to match your brand voice and specific requirements. The AI learns from your edits to provide better suggestions in the future.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <SectionContainer id="faq" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" Questions"}
            </span>
          </h2>
          <p className="text-xl text-white/80">Everything you need to know about ADmyBRAND AI Suite</p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-8 text-left flex items-center justify-between group py-6 px-6"
              >
                <div className="flex items-center space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-200">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ml-4 bg-transparent">
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 text-white ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-8 pl-26">
                  <p className="text-white/80 leading-relaxed text-lg">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}
