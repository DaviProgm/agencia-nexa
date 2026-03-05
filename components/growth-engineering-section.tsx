"use client"

import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { UserPlus, ArrowRightLeft, Zap, RotateCcw, Repeat, ChevronDown, PlayCircle, BarChart3, Users, Settings2, Target } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    title: "Aquisição",
    description: "Atraímos clientes qualificados com tráfego pago, criativos e landing pages de alta conversão.",
    color: "from-primary/20 to-primary/5",
    details: {
      metrics: ["Tráfego qualificado", "Custo por Lead (CPL)", "Taxa de conversão"],
      tools: ["Google Ads", "Facebook Ads", "TikTok Ads", "LinkedIn Ads"],
      outcome: "Aumento de 3-5x no volume de leads qualificados",
    },
  },
  {
    icon: ArrowRightLeft,
    title: "Conversão",
    description: "Transformamos visitantes em clientes com funis otimizados e automação de atendimento.",
    color: "from-primary/15 to-primary/5",
    details: {
      metrics: ["Taxa de conversão", "Tempo de resposta", "Leads convertidos"],
      tools: ["Landing Pages", "Chatbots", "CRM", "Automação de WhatsApp"],
      outcome: "Conversão de 15-30% dos visitantes em clientes",
    },
  },
  {
    icon: Zap,
    title: "Automação",
    description: "Automatizamos processos repetitivos, integramos sistemas e escalamos operações.",
    color: "from-primary/20 to-primary/5",
    details: {
      metrics: ["Horas economizadas", "Processos automatizados", "Erros reduzidos"],
      tools: ["Make/Zapier", "APIs", "Webhooks", "Integrações customizadas"],
      outcome: "Redução de 80% em tarefas manuais repetitivas",
    },
  },
  {
    icon: RotateCcw,
    title: "Retenção",
    description: "Criamos programas de fidelidade, cashback e recuperação inteligente de clientes.",
    color: "from-primary/15 to-primary/5",
    details: {
      metrics: ["Taxa de retenção", "NPS", "Churn rate"],
      tools: ["Email marketing", "Programas de pontos", "Cashback", "Clube VIP"],
      outcome: "Aumento de 40-60% na retenção de clientes",
    },
  },
  {
    icon: Repeat,
    title: "Recorrência",
    description: "Estruturamos modelos de assinatura, clube VIP e estratégias de recompra automática.",
    color: "from-primary/20 to-primary/5",
    details: {
      metrics: ["MRR/ARR", "LTV", "Frequência de compra"],
      tools: ["Assinaturas", "Clube de benefícios", "Automação de recompra"],
      outcome: "Criação de receita recorrente previsível",
    },
  },
]

export function GrowthEngineeringSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const [expandedStep, setExpandedStep] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-6">
            <span className="text-xs font-medium text-primary">Nossa metodologia</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Construímos um ecossistema completo{" "}
            <span className="text-primary">de crescimento.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cada etapa do nosso sistema é projetada para maximizar o valor de cada cliente, desde a primeira interação até a recompra contínua.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isExpanded = expandedStep === i
              return (
                <div
                  key={i}
                  onClick={() => setExpandedStep(isExpanded ? null : i)}
                  className={`group relative flex flex-col items-center text-center rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-2 cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="relative mb-4">
                    <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center transition-all group-hover:scale-110 ${isExpanded ? "ring-2 ring-primary ring-offset-2" : ""}`}>
                      <Icon size={24} className="text-primary" />
                    </div>
                    <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">{step.description}</p>
                  
                  <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="pt-3 border-t border-border w-full">
                      <div className="space-y-2">
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <BarChart3 size={12} className="text-primary" />
                          <span>Métricas: {step.details.metrics.join(", ")}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Settings2 size={12} className="text-primary" />
                          <span>Ferramentas: {step.details.tools.join(", ")}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-medium text-primary">
                          <Target size={12} />
                          <span>{step.details.outcome}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button className="mt-2 flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    {isExpanded ? "Menos" : "Detalhes"}
                    <ChevronDown size={14} className={`transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        {/* Connection flow indicator */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-6 py-3">
            <PlayCircle size={16} className="text-primary" />
            <span className="text-sm font-medium text-foreground">
              Todas as etapas funcionam de forma integrada e contínua
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
