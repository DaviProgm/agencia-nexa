"use client"

import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight } from "lucide-react"
import { DiagnosticForm } from "@/components/diagnostic-form"

export function CTASection() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const [formOpen, setFormOpen] = useState(false)

  return (
    <>
      <section id="contato" ref={ref} className="py-24 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-6">
          <div
            className={`relative rounded-3xl border border-primary/20 bg-card p-12 md:p-16 text-center overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-6">
                Pronto para escalar o faturamento{" "}
                <span className="text-primary">da sua empresa</span>?
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-10">
                Solicite um diagnóstico estratégico gratuito e descubra como podemos construir uma máquina de crescimento para o seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setFormOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-xl hover:shadow-primary/25 animate-pulse-glow"
                >
                  Solicitar diagnóstico estratégico
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => setFormOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-8 py-4 text-base font-semibold text-foreground transition-all hover:bg-secondary hover:border-primary/20"
                >
                  Falar com especialista
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DiagnosticForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </>
  )
}
