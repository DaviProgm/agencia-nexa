"use client"

import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { TrendingUp, Zap, BarChart3, Repeat, Target, CheckCircle2, ArrowRight } from "lucide-react"
import { FeatureModal } from "@/components/ui/feature-modal"

const audiences = [
  { 
    icon: TrendingUp, 
    text: "Escalar faturamento de forma previsível",
    description: "Empresas que querem sair do crescimento aleatório e construir um sistema previsível de geração de receita.",
    benefits: ["Previsibilidade de caixa", "Planejamento estratégico", "Investimentos otimizados"],
  },
  { 
    icon: Zap, 
    text: "Automatizar marketing e vendas",
    description: "Negócios que desejam reduzir trabalho manual e escalar operações sem aumentar a equipe proporcionalmente.",
    benefits: ["Economia de tempo", "Redução de erros", "Escala sem custo linear"],
  },
  { 
    icon: BarChart3, 
    text: "Aumentar margem de lucro",
    description: "Empresas que buscam otimizar custos e aumentar a rentabilidade de cada venda.",
    benefits: ["Maior ROI", "Custos otimizados", "Lucratividade crescente"],
  },
  { 
    icon: Repeat, 
    text: "Criar recorrência e recompra",
    description: "Negócios que querem transformar compradores únicos em clientes recorrentes e fiéis.",
    benefits: ["LTV aumentado", "Receita previsível", "Clientes fiéis"],
  },
  { 
    icon: Target, 
    text: "Ter previsibilidade de vendas",
    description: "Empresas que desejam saber com antecedência quanto vão faturar no próximo mês.",
    benefits: ["Meta clara", "Equipe alinhada", "Decisões informadas"],
  },
]

export function TargetAudienceSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const [selectedAudience, setSelectedAudience] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-6">
              <span className="text-xs font-medium text-primary">Para quem é</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance mb-4">
              Para empresas que querem{" "}
              <span className="text-primary">crescer de verdade</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Se a sua empresa já fatura e quer dar o próximo passo com estrutura, previsibilidade e escala, a NEXA é para você.
            </p>

            {/* Interactive CTA */}
            <div className="flex flex-col gap-4">
              <div className="group inline-flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 px-6 py-4 cursor-pointer transition-all hover:bg-primary/10 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5" onClick={() => setSelectedAudience(-1)}>
                <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
                  <CheckCircle2 size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Sua empresa se encaixa aqui?</p>
                  <p className="text-xs text-muted-foreground">Clique para descobrir</p>
                </div>
                <ArrowRight size={16} className="ml-auto text-primary transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {audiences.map((item, i) => {
              const Icon = item.icon
              const isHovered = hoveredIndex === i
              return (
                <div
                  key={i}
                  onClick={() => setSelectedAudience(i)}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-500 cursor-pointer ${
                    isHovered 
                      ? "border-primary/30 shadow-lg shadow-primary/5 translate-x-2" 
                      : "hover:border-primary/20 hover:shadow-md"
                  } ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div className={`h-10 w-10 shrink-0 rounded-lg flex items-center justify-center transition-all duration-300 ${isHovered ? "bg-primary shadow-lg shadow-primary/20 scale-110" : "bg-primary/10"}`}>
                    <Icon size={18} className={`transition-colors ${isHovered ? "text-primary-foreground" : "text-primary"}`} />
                  </div>
                  <span className={`text-sm font-medium transition-colors ${isHovered ? "text-primary" : "text-foreground"}`}>{item.text}</span>
                  <CheckCircle2 
                    size={18} 
                    className={`ml-auto transition-all duration-300 ${
                      isHovered ? "opacity-100 text-primary scale-110" : "opacity-0 text-primary scale-100"
                    }`} 
                  />
                  {isHovered && (
                    <div className="absolute inset-0 rounded-xl bg-primary/5 -z-10 transition-opacity" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {selectedAudience !== null && selectedAudience >= 0 && (
        <FeatureModal
          isOpen={true}
          onClose={() => setSelectedAudience(null)}
          title={audiences[selectedAudience].text}
          icon={(() => {
            const Icon = audiences[selectedAudience].icon
            return Icon ? <Icon size={24} className="text-primary" /> : null
          })()}
        >
          <div className="space-y-6">
            <div>
              <p className="text-muted-foreground leading-relaxed">{audiences[selectedAudience].description}</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-primary" />
                Benefícios Esperados
              </h4>
              <div className="grid sm:grid-cols-3 gap-3">
                {audiences[selectedAudience].benefits.map((benefit, idx) => (
                  <div key={idx} className="rounded-xl border border-primary/20 bg-primary/5 p-3 text-center">
                    <p className="text-sm font-medium text-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
              <p className="text-sm text-primary font-medium">
                💡 A NEXA já ajudou centenas de empresas com esse mesmo objetivo a alcançar resultados extraordinários.
              </p>
            </div>
          </div>
        </FeatureModal>
      )}

      {selectedAudience === -1 && (
        <FeatureModal
          isOpen={true}
          onClose={() => setSelectedAudience(null)}
          title="Sua empresa é ideal para nós"
          icon={<CheckCircle2 size={24} className="text-primary" />}
        >
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Se você se identificou com algum dos pontos ao lado, sua empresa é um candidato ideal para nossa 
              engenharia de crescimento.
            </p>

            <div className="rounded-xl border border-border bg-secondary/50 p-6">
              <h4 className="text-sm font-semibold text-foreground mb-4">Nós ajudamos empresas que:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={12} className="text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">Já faturam mas estão estagnadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={12} className="text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">Querem previsibilidade de receita</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={12} className="text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">Buscam escalar com eficiência</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={12} className="text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">Precisam automatizar processos</span>
                </li>
              </ul>
            </div>

            <a
              href="#contato"
              onClick={() => setSelectedAudience(null)}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-xl hover:shadow-primary/25 w-full"
            >
              Agendar diagnóstico gratuito
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </FeatureModal>
      )}
    </section>
  )
}
