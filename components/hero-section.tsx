"use client"

import { useEffect, useState } from "react"
import { ArrowRight, TrendingUp, Zap, BarChart3, Info } from "lucide-react"
import { FeatureModal } from "@/components/ui/feature-modal"
import { DiagnosticForm } from "@/components/diagnostic-form"

function AnimatedChart() {
  const [mounted, setMounted] = useState(false)
  const [hoveredBar, setHoveredBar] = useState<number | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [logoHovered, setLogoHovered] = useState(false)

  const bars = [35, 45, 40, 55, 50, 65, 60, 75, 70, 85, 80, 95]
  const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
  const revenues = ["R$ 280K", "R$ 320K", "R$ 310K", "R$ 420K", "R$ 400K", "R$ 510K", "R$ 490K", "R$ 620K", "R$ 590K", "R$ 720K", "R$ 680K", "R$ 847K"]

  return (
    <>
      <div className="relative w-full max-w-md mx-auto">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-xl">
          {/* Logo flutuante */}
          <div
            className="absolute -top-6 left-1/2 -translate-x-1/2 z-20"
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
          >
            <div className={`relative flex items-center gap-3 rounded-2xl bg-card px-5 py-3.5 shadow-lg shadow-primary/30 transition-all duration-500 ${logoHovered ? "scale-110 rotate-3" : "scale-100 rotate-0"}`}>
              <div className="h-16 w-16 overflow-hidden rounded-xl flex items-center justify-center">
                <img src="/nexafavicon.jpg" alt="NEXA" className="h-full w-full object-cover" />
              </div>
              <span className="text-2xl font-bold text-primary">NEXA</span>
              {/* Badge animado */}
              <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-card animate-pulse" />
            </div>
            {/* Tooltip da logo */}
            {logoHovered && (
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-popover border border-border rounded-lg px-3 py-2 text-xs shadow-lg whitespace-nowrap animate-scale-up">
                <p className="font-semibold text-foreground">NEXA</p>
                <p className="text-muted-foreground">Crescimento em tempo real</p>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between mb-4 pt-4">
            <div>
              <p className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                Faturamento Mensal
                <button 
                  onClick={() => setShowModal(true)}
                  className="inline-flex items-center justify-center rounded-full p-0.5 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                >
                  <Info size={12} />
                </button>
              </p>
              <p className="text-2xl font-bold text-foreground">R$ 847K</p>
            </div>
            <div className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1">
              <TrendingUp size={14} className="text-primary" />
              <span className="text-xs font-semibold text-primary">+127%</span>
            </div>
          </div>
          <div className="flex items-end gap-1.5 h-32">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm transition-all duration-300 cursor-pointer relative group"
                onMouseEnter={() => setHoveredBar(i)}
                onMouseLeave={() => setHoveredBar(null)}
                style={{
                  height: mounted ? `${h}%` : "0%",
                  backgroundColor: i >= 8 ? "#FF6A00" : hoveredBar === i ? "#FF8C33" : "#e5e5e5",
                  transitionDelay: `${i * 80}ms`,
                  transform: hoveredBar === i ? "scaleY(1.05)" : "scaleY(1)",
                  transformOrigin: "bottom",
                }}
              >
                {hoveredBar === i && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-popover border border-border rounded-lg px-2 py-1 text-xs shadow-lg whitespace-nowrap z-10">
                    <p className="font-semibold">{revenues[i]}</p>
                    <p className="text-muted-foreground">{months[i]}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-[10px] text-muted-foreground">Jan</span>
            <span className="text-[10px] text-muted-foreground">Jun</span>
            <span className="text-[10px] text-muted-foreground">Dez</span>
          </div>
        </div>

        {/* Floating cards */}
        <div className="absolute -top-4 -right-4 rounded-xl border border-border bg-card px-4 py-3 shadow-lg animate-float">
          <div className="flex items-center gap-2">
            <img src="/nexa.png" alt="NEXA" className="h-8 w-8 object-cover" />
            <div>
              <p className="text-[10px] text-muted-foreground flex items-center gap-1">
                Automações
                <button
                  onClick={() => setShowModal(true)}
                  className="inline-flex items-center justify-center rounded-full p-0.5 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                >
                  <Info size={10} />
                </button>
              </p>
              <p className="text-sm font-bold text-foreground">24 ativas</p>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-card px-4 py-3 shadow-lg animate-float" style={{ animationDelay: "1.5s" }}>
          <div className="flex items-center gap-2">
            <img src="/nexa.png" alt="NEXA" className="h-8 w-8 object-cover" />
            <div>
              <p className="text-[10px] text-muted-foreground flex items-center gap-1">
                Clientes/dia
                <button
                  onClick={() => setShowModal(true)}
                  className="inline-flex items-center justify-center rounded-full p-0.5 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                >
                  <Info size={10} />
                </button>
              </p>
              <p className="text-sm font-bold text-foreground">+38</p>
            </div>
          </div>
        </div>
      </div>

      <FeatureModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Métricas de Crescimento"
        icon={<TrendingUp size={24} className="text-primary" />}
      >
        <div className="space-y-4">
          <p>
            Nossos clientes experimentam um crescimento médio de <strong className="text-primary">127%</strong> no faturamento 
            nos primeiros 6 meses de implementação do nosso sistema de engenharia de crescimento.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-border bg-secondary/50 p-4">
              <p className="text-2xl font-bold text-primary">+38</p>
              <p className="text-xs text-muted-foreground">Novos clientes por dia</p>
            </div>
            <div className="rounded-xl border border-border bg-secondary/50 p-4">
              <p className="text-2xl font-bold text-primary">24</p>
              <p className="text-xs text-muted-foreground">Automações ativas</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Esses números são alcançados através da implementação integrada de aquisição, conversão, 
            automação e retenção de clientes.
          </p>
        </div>
      </FeatureModal>
    </>
  )
}

function GridBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(255,106,0,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,106,0,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />
      <div 
        className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl transition-transform duration-300"
        style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
      />
      <div 
        className="absolute bottom-1/4 left-1/4 h-64 w-64 rounded-full bg-primary/3 blur-3xl transition-transform duration-300"
        style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
      />
    </div>
  )
}

export function HeroSection() {
  const [formOpen, setFormOpen] = useState(false)

  return (
    <>
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <GridBackground />
      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 w-fit">
              <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-primary">Engenharia de Crescimento Empresarial</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground text-balance">
              Transformamos empresas em{" "}
              <span className="text-primary">máquinas previsíveis</span>{" "}
              de faturamento.
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Estruturamos aquisição de clientes, automação de marketing e estratégias de retenção para empresas que querem crescer com previsibilidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <button
                onClick={() => setFormOpen(true)}
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-xl hover:shadow-primary/25 animate-pulse-glow"
              >
                Solicitar diagnóstico estratégico
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => setFormOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-secondary hover:border-primary/20"
              >
                Falar com especialista
              </button>
            </div>

            <div className="flex items-center gap-8 mt-4">
              <div className="group cursor-default">
                <p className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">500+</p>
                <p className="text-xs text-muted-foreground">Empresas atendidas</p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="group cursor-default">
                <p className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">R$2B+</p>
                <p className="text-xs text-muted-foreground">Faturamento gerado</p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="group cursor-default">
                <p className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">127%</p>
                <p className="text-xs text-muted-foreground">Crescimento médio</p>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <AnimatedChart />
          </div>
        </div>
      </div>
    </section>

    <DiagnosticForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </>
  )
}
