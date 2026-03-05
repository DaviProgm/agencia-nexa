import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { LogoBar } from "@/components/logo-bar"
import { ProblemsSection } from "@/components/problems-section"
import { GrowthEngineeringSection } from "@/components/growth-engineering-section"
import { GrowthLeversSection } from "@/components/growth-levers-section"
import { TimelineSection } from "@/components/timeline-section"
import { ResultsSection } from "@/components/results-section"
import { TargetAudienceSection } from "@/components/target-audience-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <LogoBar />
      <ProblemsSection />
      <GrowthEngineeringSection />
      <GrowthLeversSection />
      <TimelineSection />
      <ResultsSection />
      <TargetAudienceSection />
      <CTASection />
      <Footer />
    </main>
  )
}
