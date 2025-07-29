"use client"

import { motion } from "framer-motion"
import { SectionContainer } from "./section-container"
import { GlassCard } from "./glass-card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is ADmyBRAND and how does it work?",
    answer:
      "ADmyBRAND is an AI-powered marketing platform that helps businesses create, optimize, and automate their marketing campaigns. Our advanced AI algorithms analyze your brand, audience, and market trends to generate high-converting content, optimize targeting, and provide actionable insights for better campaign performance.",
  },
  {
    question: "Do I need technical expertise to use ADmyBRAND?",
    answer:
      "Not at all! ADmyBRAND is designed to be user-friendly and intuitive. Our platform features a simple drag-and-drop interface, pre-built templates, and guided workflows that make it easy for anyone to create professional marketing campaigns, regardless of their technical background.",
  },
  {
    question: "What types of content can ADmyBRAND generate?",
    answer:
      "Our AI can generate a wide variety of marketing content including email campaigns, social media posts, blog articles, ad copy, product descriptions, landing page content, and more. The AI is trained on high-converting marketing content and can adapt to your brand voice and style.",
  },
  {
    question: "How accurate is the AI-generated content?",
    answer:
      "Our AI generates highly accurate and relevant content with a 95% satisfaction rate among users. The AI is continuously learning and improving based on performance data and user feedback. You can always review and edit the generated content before publishing.",
  },
  {
    question: "Can I integrate ADmyBRAND with my existing marketing tools?",
    answer:
      "Yes! ADmyBRAND integrates with over 100 popular marketing tools including Google Ads, Facebook Ads, Mailchimp, HubSpot, Salesforce, Shopify, and many more. Our API also allows for custom integrations with your existing systems.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We provide comprehensive support including 24/7 chat support, email support, extensive documentation, video tutorials, and webinar training sessions. Enterprise customers also get dedicated account managers and priority support.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! We offer a 14-day free trial with full access to all features. No credit card is required to start your trial. You can explore all the capabilities of ADmyBRAND and see how it can transform your marketing efforts.",
  },
  {
    question: "How secure is my data with ADmyBRAND?",
    answer:
      "Data security is our top priority. We use enterprise-grade encryption, secure cloud infrastructure, and comply with GDPR, CCPA, and other data protection regulations. Your data is never shared with third parties and you maintain full ownership of your content and customer data.",
  },
]

export default function FAQSection() {
  return (
    <SectionContainer id="faq" className="py-24">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Got questions? We've got answers. Here are the most common questions about ADmyBRAND.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border-white/10 hover:border-white/20 transition-colors"
                  >
                    <AccordionTrigger className="text-white hover:text-purple-300 text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 leading-relaxed">{faq.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </GlassCard>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-white/70 mb-6">Still have questions?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </SectionContainer>
  )
}
