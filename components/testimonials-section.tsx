"use client"

import { motion } from "framer-motion"
import { SectionContainer } from "./section-container"
import { GlassCard } from "./glass-card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStart Inc.",
    image: "/placeholder-user.jpg",
    rating: 5,
    content:
      "ADmyBRAND transformed our marketing strategy completely. Our conversion rates increased by 300% in just 3 months. The AI-powered insights are incredible!",
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "GrowthLab",
    image: "/placeholder-user.jpg",
    rating: 5,
    content:
      "The automation features saved us 20 hours per week. We can now focus on strategy while the AI handles optimization. Best investment we've made!",
  },
  {
    name: "Emily Rodriguez",
    role: "Brand Manager",
    company: "Creative Studios",
    image: "/placeholder-user.jpg",
    rating: 5,
    content:
      "The content generation quality is outstanding. It's like having a team of expert copywriters working 24/7. Our engagement rates have never been higher.",
  },
  {
    name: "David Park",
    role: "Marketing Manager",
    company: "ScaleUp Co.",
    image: "/placeholder-user.jpg",
    rating: 5,
    content:
      "ADmyBRAND's targeting capabilities are unmatched. We're reaching exactly the right audience at the perfect time. ROI improved by 250%!",
  },
  {
    name: "Lisa Thompson",
    role: "Digital Marketing Lead",
    company: "InnovateTech",
    image: "/placeholder-user.jpg",
    rating: 5,
    content:
      "The real-time optimization is game-changing. Our campaigns continuously improve without manual intervention. It's like having a marketing genius on autopilot.",
  },
  {
    name: "James Wilson",
    role: "Founder",
    company: "StartupX",
    image: "/placeholder-user.jpg",
    rating: 5,
    content:
      "As a small startup, we needed enterprise-level marketing tools. ADmyBRAND gave us exactly that at a fraction of the cost. Absolutely revolutionary!",
  },
]

export default function TestimonialsSection() {
  return (
    <SectionContainer id="testimonials" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have transformed their marketing with ADmyBRAND.
          </p>
        </motion.div>

        {/* First Row - Moving Right */}
        <div className="relative mb-8">
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{
              duration: 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="flex space-x-8"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div key={`row1-${index}`} whileHover={{ scale: 1.05 }} className="flex-shrink-0 w-96">
                <GlassCard className="p-6 h-full group hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-purple-500/30"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-white/60 text-sm">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <div className="relative">
                    <Quote className="w-6 h-6 text-purple-400/50 absolute -top-2 -left-2" />
                    <p className="text-white/80 leading-relaxed pl-4">{testimonial.content}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Second Row - Moving Left */}
        <div className="relative">
          <motion.div
            animate={{ x: [-1920, 0] }}
            transition={{
              duration: 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="flex space-x-8"
          >
            {[...testimonials.slice().reverse(), ...testimonials.slice().reverse()].map((testimonial, index) => (
              <motion.div key={`row2-${index}`} whileHover={{ scale: 1.05 }} className="flex-shrink-0 w-96">
                <GlassCard className="p-6 h-full group hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-pink-500/30"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-white/60 text-sm">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <div className="relative">
                    <Quote className="w-6 h-6 text-pink-400/50 absolute -top-2 -left-2" />
                    <p className="text-white/80 leading-relaxed pl-4">{testimonial.content}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  )
}
