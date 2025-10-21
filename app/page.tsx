import { Header } from "@/components/header"
import { PresentationSection } from "@/components/presentation-section"
import { PricingSection } from "@/components/pricing-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ArtGallerySection } from "@/components/art-gallery-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { FAQSection } from "@/components/faq-section"
import { SecuritySealSection } from "@/components/security-seal-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white fluid-bg">
      <Header />
      <PresentationSection />
      <HowItWorksSection />
      <ArtGallerySection />
      <TestimonialsSection />
      <PricingSection />
      <FinalCTASection />
      <FAQSection />
      <SecuritySealSection />
      <Footer />
    </main>
  )
}
