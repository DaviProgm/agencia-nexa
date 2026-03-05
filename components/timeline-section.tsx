"use client"

import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Search, Wrench, Cog, Rocket, CheckCircle, Clock, FileText, Play } from "lucide-react"

const timelineSteps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnóstico Estratégico",
    description: "Analisamos sua operação, identificamos gargalos e mapeamos oportunidades de crescimento com dados reais.",
    duration: "1-2 semanas",
    deliverables: [
      "Auditoria completa de marketing e vendas",
      "Mapeamento de funnel atual",
      "Identificação de gargalos e oportunidades",
      "Plano estratégico personalizado",
      "Definição de KPIs e metas",
    ],
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: Wrench,
    number: "02",
    title: "Construção da Estrutura",
    description: "Desenhamos e construímos todo o ecossistema de aquisição, conversão e retenção sob medida para sua empresa.",
    duration: "2-4 semanas",
    deliverables: [
      "Landing pages de alta conversão",
      "Configuração de pixel e tracking",
      "Estrutura de campanhas de tráfego",
      "Criativos e copies",
      "Integração de ferramentas",
    ],
    color: "from-orange-500/20 to-orange-500/5",
  },
  {
    icon: Cog,
    number: "03",
    title: "Implementação das Automações",
    description: "Colocamos tudo para rodar: integrações, automações, fluxos de atendimento e campanhas otimizadas.",
    duration: "2-3 semanas",
    deliverables: [
      "Automação de marketing (email/SMS/WhatsApp)",
      "Chatbots e qualificação de leads",
      "Fluxos de nutrição e onboarding",
      "Dashboards de acompanhamento",
      "Treinamento da equipe",
    ],
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Escala e Crescimento",
    description: "Com a estrutura validada, escalamos investimentos e aceleramos o crescimento de forma previsível.",
    duration: "Contínuo",
    deliverables: [
      "Otimização diária de campanhas",
      "Escala progressiva de orçamento",
      "Testes A/B contínuos",
      "Relatórios semanais de performance",
      "Ajustes estratégicos mensais",
    ],
    color: "from-green-500/20 to-green-500/5",
  },
]

export function TimelineSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const [activeStep, setActiveStep] = useState<number | null>(null)

  return (
    <section id="como-funciona" ref={ref} className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-6">
            <span className="text-xs font-medium text-primary">Como funciona</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Do diagnóstico à{" "}
            <span className="text-primary">escala</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Clique em cada etapa para ver os deliverables detalhados
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {timelineSteps.map((step, i) => {
              const Icon = step.icon
              const isLeft = i % 2 === 0
              const isActive = activeStep === i
              return (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row items-center gap-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 200}ms` }}
                >
                  {/* Left content */}
                  <div className={`flex-1 ${isLeft ? "md:text-right" : "md:order-3 md:text-left"}`}>
                    {isLeft && (
                      <div 
                        onClick={() => setActiveStep(isActive ? null : i)}
                        className={`rounded-2xl border border-border bg-card p-6 cursor-pointer transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${isActive ? "border-primary/50 shadow-lg shadow-primary/10" : ""}`}
                      >
                        <div className="flex items-center gap-2 mb-2 justify-start">
                          <p className="text-xs font-bold text-primary">{step.number}</p>
                          <div className="flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5">
                            <Clock size={10} className="text-primary" />
                            <span className="text-xs text-primary">{step.duration}</span>
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">{step.description}</p>
                        
                        <div className={`overflow-hidden transition-all duration-500 ${isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                          <div className="pt-3 border-t border-border">
                            <p className="text-xs font-semibold text-foreground mb-2 flex items-center gap-2">
                              <FileText size={12} className="text-primary" />
                              Deliverables:
                            </p>
                            <ul className="space-y-1">
                              {step.deliverables.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                                  <CheckCircle size={12} className="text-primary mt-0.5 shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <button className="mt-3 flex items-center gap-1 text-xs font-medium text-primary mx-auto">
                          {isActive ? "Ver menos" : "Ver deliverables"}
                          <Play size={10} className={`transition-transform ${isActive ? "rotate-90" : ""}`} />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Center circle */}
                  <div 
                    className={`relative z-10 md:order-2 flex-shrink-0 cursor-pointer transition-all duration-300 ${isActive ? "scale-110" : ""}`}
                    onClick={() => setActiveStep(isActive ? null : i)}
                  >
                    <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg transition-all duration-300 ${isActive ? "ring-2 ring-primary ring-offset-2" : ""}`}>
                      <Icon size={22} className="text-primary" />
                    </div>
                    {i < timelineSteps.length - 1 && (
                      <div className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 w-px h-12 bg-border" />
                    )}
                  </div>

                  {/* Right content */}
                  <div className={`flex-1 ${isLeft ? "md:order-3" : ""}`}>
                    {!isLeft && (
                      <div 
                        onClick={() => setActiveStep(isActive ? null : i)}
                        className={`rounded-2xl border border-border bg-card p-6 cursor-pointer transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${isActive ? "border-primary/50 shadow-lg shadow-primary/10" : ""}`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <p className="text-xs font-bold text-primary">{step.number}</p>
                          <div className="flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5">
                            <Clock size={10} className="text-primary" />
                            <span className="text-xs text-primary">{step.duration}</span>
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">{step.description}</p>
                        
                        <div className={`overflow-hidden transition-all duration-500 ${isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                          <div className="pt-3 border-t border-border">
                            <p className="text-xs font-semibold text-foreground mb-2 flex items-center gap-2">
                              <FileText size={12} className="text-primary" />
                              Deliverables:
                            </p>
                            <ul className="space-y-1">
                              {step.deliverables.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                                  <CheckCircle size={12} className="text-primary mt-0.5 shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <button className="mt-3 flex items-center gap-1 text-xs font-medium text-primary">
                          {isActive ? "Ver menos" : "Ver deliverables"}
                          <Play size={10} className={`transition-transform ${isActive ? "rotate-90" : ""}`} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Progress indicator */}
        <div className="mt-16">
          <div className="rounded-2xl border border-border bg-card p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-semibold text-foreground">Progresso do Projeto</h4>
              <span className="text-xs text-muted-foreground">
                {activeStep !== null ? `Etapa ${activeStep + 1} selecionada` : "Selecione uma etapa"}
              </span>
            </div>
            <div className="flex gap-2">
              {timelineSteps.map((step, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                    i <= (activeStep !== null ? activeStep : 0)
                      ? "bg-primary"
                      : "bg-border"
                  }`}
                  aria-label={`Ir para etapa ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex justify-between mt-2">
              {timelineSteps.map((step, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`text-xs transition-colors ${
                    activeStep === i ? "text-primary font-semibold" : "text-muted-foreground"
                  }`}
                >
                  {step.title.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
