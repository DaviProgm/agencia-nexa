"use client"

import { Building2 } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const companies = [
  "TechVista", "NovaCorp", "Meridian", "Apex Digital",
  "BlueStar", "Quantum", "Vertex AI", "CloudPeak",
  "SynergyX", "Elevate", "Zenith", "Primus"
]

export function LogoBar() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section ref={ref} className="py-16 border-y border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <p className={`text-center text-sm font-medium text-muted-foreground mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Empresas que confiam em nossa engenharia de crescimento
        </p>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-secondary/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-secondary/30 to-transparent z-10 pointer-events-none" />
          <div className="flex animate-marquee gap-12 w-max">
            {[...companies, ...companies].map((name, i) => (
              <div
                key={i}
                className="group flex items-center gap-2 rounded-lg border border-transparent px-5 py-3 transition-all hover:border-primary/20 hover:bg-card hover:shadow-sm cursor-default"
              >
                <Building2 size={20} className="text-muted-foreground/50 group-hover:text-primary transition-colors" />
                <span className="text-sm font-semibold text-muted-foreground/60 group-hover:text-foreground transition-colors whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
