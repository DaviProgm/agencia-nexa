"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useEffect, useState, useRef, useCallback } from "react"
import { TrendingUp, Users, RotateCcw, DollarSign, BarChart3, Info } from "lucide-react"
import { FeatureModal } from "@/components/ui/feature-modal"

function AnimatedCounter({ end, suffix = "", prefix = "", label, description }: { end: number; suffix?: string; prefix?: string; label: string; description: string }) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.5 }
    )

    const current = counterRef.current
    if (current) observer.observe(current)
    return () => { if (current) observer.unobserve(current) }
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return
    const duration = 2000
    const steps = 60
    const increment = end / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [hasStarted, end])

  return (
    <div 
      ref={counterRef} 
      className="group flex flex-col items-center text-center cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative h-12 w-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${isHovered ? "bg-primary shadow-lg shadow-primary/30 scale-110" : "bg-primary/20"}`}>
        <TrendingUp size={22} className={`transition-all duration-300 ${isHovered ? "text-primary-foreground" : "text-primary"}`} />
        {isHovered && (
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-popover border border-border rounded-lg px-3 py-2 text-xs shadow-lg whitespace-nowrap z-10 animate-scale-up">
            <p className="font-semibold text-foreground">{label}</p>
          </div>
        )}
      </div>
      <div className={`text-4xl md:text-5xl font-bold transition-all duration-300 ${isHovered ? "text-primary scale-110" : "text-foreground"}`}>
        {prefix}{count}{suffix}
      </div>
      <p className="text-sm text-background/60 mt-2">{description}</p>
    </div>
  )
}

const results = [
  { 
    icon: TrendingUp, 
    label: "Aumento de faturamento", 
    value: 127, 
    suffix: "%", 
    prefix: "+",
    description: "Crescimento médio nos primeiros 6 meses",
    details: "Empresas que implementam nosso sistema completo experimentam um aumento médio de 127% no faturamento semestral.",
  },
  { 
    icon: Users, 
    label: "Mais clientes por dia", 
    value: 38, 
    suffix: "", 
    prefix: "+",
    description: "Novos clientes adquiridos diariamente",
    details: "Sistemas de aquisição multi-canal geram um fluxo constante e previsível de novos clientes.",
  },
  { 
    icon: RotateCcw, 
    label: "Taxa de recompra", 
    value: 64, 
    suffix: "%", 
    prefix: "",
    description: "Clientes que compram novamente",
    details: "Programas de retenção e recompra transformam compradores únicos em clientes recorrentes.",
  },
  { 
    icon: DollarSign, 
    label: "Aumento de ticket médio", 
    value: 85, 
    suffix: "%", 
    prefix: "+",
    description: "Valor médio por transação",
    details: "Estratégias de upsell e order bumps aumentam significativamente o valor de cada compra.",
  },
  { 
    icon: BarChart3, 
    label: "Crescimento previsível", 
    value: 94, 
    suffix: "%", 
    prefix: "",
    description: "Das empresas atingem as metas",
    details: "Com métricas claras e processos otimizados, o crescimento se torna previsível e escalável.",
  },
]

export function ResultsSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const [selectedResult, setSelectedResult] = useState<number | null>(null)

  return (
    <section id="resultados" ref={ref} className="py-24 bg-foreground relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-primary/3 blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-4 py-1.5 mb-6">
            <span className="text-xs font-medium text-primary">Resultados reais</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-background text-balance">
            Números que{" "}
            <span className="text-primary">falam por si</span>
          </h2>
          <p className="mt-4 text-background/60 max-w-2xl mx-auto leading-relaxed">
            Resultados médios alcançados por nossos clientes nos primeiros 6 meses de operação.
          </p>
          <p className="mt-2 text-sm text-background/40">
            Passe o mouse ou clique nas métricas para mais detalhes
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {results.map((result, i) => {
            const Icon = result.icon
            return (
              <div
                key={i}
                onClick={() => setSelectedResult(i)}
                className={`group flex flex-col items-center text-center transition-all duration-700 cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className={`relative h-12 w-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/30 group-hover:scale-110 ${"bg-primary/20"}`}>
                  <Icon size={22} className="text-primary transition-all duration-300 group-hover:text-primary-foreground" />
                </div>
                <AnimatedCounter 
                  end={result.value} 
                  suffix={result.suffix} 
                  prefix={result.prefix} 
                  label={result.label}
                  description={result.description}
                />
              </div>
            )
          })}
        </div>

        {/* Summary card */}
        <div className={`mt-16 rounded-2xl border border-background/10 bg-background/5 p-8 max-w-3xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "1000ms" }}>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-primary mb-1">500+</p>
              <p className="text-sm text-background/60">Empresas atendidas</p>
            </div>
            <div className="md:border-l md:border-r border-background/10">
              <p className="text-3xl font-bold text-primary mb-1">R$2B+</p>
              <p className="text-sm text-background/60">Faturamento gerado</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-1">98%</p>
              <p className="text-sm text-background/60">Taxa de satisfação</p>
            </div>
          </div>
        </div>
      </div>

      {selectedResult !== null && (
        <FeatureModal
          isOpen={true}
          onClose={() => setSelectedResult(null)}
          title={results[selectedResult].label}
          icon={(() => {
            const Icon = results[selectedResult].icon
            return Icon ? <Icon size={24} className="text-primary" /> : null
          })()}
        >
          <div className="space-y-6">
            <div className="text-center py-6">
              <p className="text-6xl font-bold text-primary mb-2">
                {results[selectedResult].prefix}{results[selectedResult].value}{results[selectedResult].suffix}
              </p>
              <p className="text-muted-foreground">{results[selectedResult].description}</p>
            </div>

            <div className="rounded-xl border border-border bg-secondary/50 p-4">
              <p className="text-muted-foreground leading-relaxed">{results[selectedResult].details}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-center">
                <p className="text-2xl font-bold text-primary">6 meses</p>
                <p className="text-xs text-muted-foreground mt-1">Tempo médio</p>
              </div>
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-center">
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-xs text-muted-foreground mt-1">Garantido</p>
              </div>
            </div>

            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
              <p className="text-sm text-primary font-medium">
                💡 Estes resultados são alcançados através da implementação integrada do nosso sistema completo de engenharia de crescimento.
              </p>
            </div>
          </div>
        </FeatureModal>
      )}
    </section>
  )
}
