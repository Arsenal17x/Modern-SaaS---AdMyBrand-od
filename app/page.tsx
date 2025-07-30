import dynamic from "next/dynamic"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import { LazySection } from "@/components/lazy-section"

// Lazy load heavy components
const AboutSection = dynamic(() => import("@/components/about-section"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-white/5 rounded-lg" />
})
const FeaturesSection = dynamic(() => import("@/components/features-section"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-white/5 rounded-lg" />
})
const PricingSection = dynamic(() => import("@/components/pricing-section"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-white/5 rounded-lg" />
})
const TestimonialsSection = dynamic(() => import("@/components/testimonials-section"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-white/5 rounded-lg" />
})
const FAQSection = dynamic(() => import("@/components/faq-section"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-white/5 rounded-lg" />
})
const ContactSection = dynamic(() => import("@/components/contact-section"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-white/5 rounded-lg" />
})
const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <div className="min-h-[200px] animate-pulse bg-white/5" />
})
const BackToTop = dynamic(() => import("@/components/back-to-top"), {
  ssr: false
})

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-black" role="main">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-indigo-700 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10" role="main">
        <HeroSection />
        <LazySection>
          <AboutSection />
        </LazySection>
        <LazySection>
          <FeaturesSection />
        </LazySection>
        <LazySection>
          <PricingSection />
        </LazySection>
        <LazySection>
          <TestimonialsSection />
        </LazySection>
        <LazySection>
          <FAQSection />
        </LazySection>
        <LazySection>
          <ContactSection />
        </LazySection>
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top */}
      <BackToTop />
    </div>

  )
}
