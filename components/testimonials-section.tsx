"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { SectionContainer } from "@/components/section-container"
import { useEffect, useState } from "react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow Inc.",
    logo: "TF",
    photo: "/placeholder.svg?height=60&width=60&text=SC",
    content:
      "🚀 ADmyBRAND completely transformed our marketing workflow! We went from spending weeks on campaign creation to just hours. The AI suggestions are so spot-on, it's like having a marketing genius on our team 24/7.",
    rating: 5,
    color: "from-purple-400 to-purple-600",
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder & CEO",
    company: "StartupLab",
    logo: "SL",
    photo: "/placeholder.svg?height=60&width=60&text=MR",
    content:
      "💡 As a startup founder, I was skeptical about AI marketing tools. But ADmyBRAND? It's pure magic! Our conversion rates jumped 300% in just 2 months. I literally can't imagine running campaigns without it now.",
    rating: 5,
    color: "from-pink-400 to-pink-600",
  },
  {
    name: "Emily Watson",
    role: "Creative Director",
    company: "BrandCraft Agency",
    logo: "BC",
    photo: "/placeholder.svg?height=60&width=60&text=EW",
    content:
      "🎨 The creative possibilities are endless! ADmyBRAND's design AI understands our brand voice better than some of our junior designers. We've saved 750+ hours of work time and our clients are absolutely thrilled with the results.",
    rating: 5,
    color: "from-indigo-400 to-purple-500",
  },
  {
    name: "David Kim",
    role: "Growth Manager",
    company: "EcoTech Solutions",
    logo: "ET",
    photo: "/placeholder.svg?height=60&width=60&text=DK",
    content:
      "📈 The analytics insights are mind-blowing! ADmyBRAND predicted our best-performing campaigns before we even launched them. Our ROI increased by 250% and we finally have data-driven confidence in every decision we make.",
    rating: 5,
    color: "from-violet-400 to-purple-600",
  },
  {
    name: "Lisa Thompson",
    role: "Marketing Manager",
    company: "FitLife App",
    logo: "FL",
    photo: "/placeholder.svg?height=60&width=60&text=LT",
    content:
      "⚡ Game-changer alert! The automation features are incredible. Our campaigns now run themselves while we sleep, and we wake up to better results than we ever achieved manually. It's like having a marketing team that never stops working.",
    rating: 5,
    color: "from-fuchsia-400 to-pink-600",
  },
  {
    name: "Alex Johnson",
    role: "CMO",
    company: "InnovateCorp",
    logo: "IC",
    photo: "/placeholder.svg?height=60&width=60&text=AJ",
    content:
      "🔥 ADmyBRAND isn't just a tool, it's our secret weapon! We've outperformed competitors 3x our size thanks to the AI-powered insights. Our board is amazed by the results we're delivering with a fraction of the budget.",
    rating: 5,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Jennifer Park",
    role: "Digital Marketing Lead",
    company: "CloudSync",
    logo: "CS",
    photo: "/placeholder.svg?height=60&width=60&text=JP",
    content:
      "✨ The content generation is absolutely phenomenal! ADmyBRAND writes better copy than our expensive freelancers, and it does it in seconds. Our engagement rates have never been higher, and our content calendar is always full.",
    rating: 5,
    color: "from-rose-400 to-pink-600",
  },
  {
    name: "Michael Brown",
    role: "VP of Marketing",
    company: "DataFlow Systems",
    logo: "DF",
    photo: "/placeholder.svg?height=60&width=60&text=MB",
    content:
      "🎯 Finally, a marketing platform that actually gets it! The targeting precision is surgical - we're reaching exactly the right people at exactly the right time. Our cost per acquisition dropped by 60% while our quality leads doubled.",
    rating: 5,
    color: "from-purple-400 to-indigo-600",
  },
]

export function TestimonialsSection() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Duplicate testimonials for seamless loop
  const firstRow = [...testimonials, ...testimonials]
  const secondRow = [...testimonials.slice().reverse(), ...testimonials.slice().reverse()]

  if (!isClient) {
    return (
      <SectionContainer id="testimonials" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Loved by our
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" customers"}
              </span>
            </h2>
          </div>
        </div>
      </SectionContainer>
    )
  }

  return (
    <SectionContainer id="testimonials" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Loved by our
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" customers"}
            </span>
          </h2>

          {/* Trust indicators */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-white/80 font-medium">4.8</span>
              <span className="text-white/60">200+ reviews</span>
            </div>
            <div className="text-white/60">•</div>
            <div className="text-white/80 font-medium">Gartner</div>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-white/80 font-medium">4.6</span>
          </div>
        </motion.div>

        {/* First Row - Moving Right */}
        <div className="relative mb-8">
          <motion.div
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 50,
                ease: "linear",
              },
            }}
            className="flex space-x-6"
          >
            {firstRow.map((testimonial, index) => (
              <div
                key={`first-${index}`}
                className={`flex-shrink-0 p-6 rounded-2xl w-96 bg-gradient-to-br ${testimonial.color} text-white relative shadow-xl hover:shadow-2xl transition-shadow duration-300`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
                    <span className="font-bold text-lg text-white">{testimonial.logo}</span>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-300 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-white/95 mb-6 font-medium leading-relaxed text-sm">{testimonial.content}</p>

                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.photo || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                    <div className="text-white/80 text-xs">{testimonial.role}</div>
                    <div className="text-white/70 text-xs font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second Row - Moving Left */}
        <div className="relative">
          <motion.div
            animate={{
              x: [-1920, 0],
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 45,
                ease: "linear",
              },
            }}
            className="flex space-x-6"
          >
            {secondRow.map((testimonial, index) => (
              <div
                key={`second-${index}`}
                className={`flex-shrink-0 p-6 rounded-2xl w-96 bg-gradient-to-br ${testimonial.color} text-white relative shadow-xl hover:shadow-2xl transition-shadow duration-300`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
                    <span className="font-bold text-lg text-white">{testimonial.logo}</span>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-300 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-white/95 mb-6 font-medium leading-relaxed text-sm">{testimonial.content}</p>

                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.photo || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                    <div className="text-white/80 text-xs">{testimonial.role}</div>
                    <div className="text-white/70 text-xs font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  )
}
