"use client"

import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { TrendingDown, DollarSign, Users, RefreshCcw, Settings, X, CheckCircle } from "lucide-react"
import { FeatureModal } from "@/components/ui/feature-modal"

const problems = [
  {
    icon: TrendingDown,
    title: "Falta de previsibilidade de vendas",
    description: "Sem um sistema estruturado, cada mês é uma surpresa. O faturamento oscila sem controle.",
    impact: "Empresas sem previsibilidade crescem 3x mais devagar e têm dificuldade em planejar investimentos.",
    solution: "Implementamos um sistema de aquisição multi-canal com métricas claras que garantem fluxo constante de leads.",
  },
  {
    icon: DollarSign,
    title: "Marketing que não gera retorno",
    description: "Investimento em tráfego sem estratégia clara de conversão. Dinheiro desperdiçado sem resultado.",
    impact: "O brasileiro médio desperdiça 40% do orçamento de marketing em ações que não trazem ROI mensurável.",
    solution: "Criamos campanhas com tracking completo, otimização contínua e foco em conversão real.",
  },
  {
    icon: Users,
    title: "Dependência de indicações",
    description: "Crescer apenas por indicação limita sua escala. Você precisa de um motor previsível de aquisição.",
    impact: "Empresas que dependem de indicações têm crescimento limitado e não conseguem escalar de forma previsível.",
    solution: "Desenvolvemos canais próprios de aquisição que funcionam 24/7, independentemente de indicações.",
  },
  {
    icon: RefreshCcw,
    title: "Clientes que compram uma vez e nunca mais voltam",
    description: "Sem estratégia de retenção, cada venda é uma conquista perdida. Recompra zero.",
    impact: "Aumentar a retenção em 5% pode aumentar o lucro em até 95%, segundo estudos de Harvard.",
    solution: "Criamos programas de retenção, fidelidade e recompra que transformam compradores em clientes recorrentes.",
  },
  {
    icon: Settings,
    title: "Processos manuais e desorganizados",
    description: "Equipe sobrecarregada com tarefas repetitivas. Falta automação e integração entre sistemas.",
    impact: "Empresas não automatizadas perdem até 20 horas semanais em tarefas que poderiam ser automáticas.",
    solution: "Automatizamos processos de marketing, vendas e atendimento, liberando sua equipe para o estratégico.",
  },
]

export function ProblemsSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const [selectedProblem, setSelectedProblem] = useState<number | null>(null)

  return (
    <section id="sobre" ref={ref} className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-6">
            <span className="text-xs font-medium text-primary">O problema</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Sua empresa sofre com algum{" "}
            <span className="text-primary">desses problemas</span>?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Clique em cada card para entender o impacto e como resolvemos cada um
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, i) => {
            const Icon = problem.icon
            return (
              <div
                key={i}
                onClick={() => setSelectedProblem(i)}
                className={`group relative rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-primary">
                      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-all group-hover:bg-primary/20 group-hover:scale-110">
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{problem.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </div>
            )
          })}
        </div>
      </div>

      {selectedProblem !== null && (
        <FeatureModal
          isOpen={true}
          onClose={() => setSelectedProblem(null)}
          title={problems[selectedProblem].title}
          icon={(() => {
            const Icon = problems[selectedProblem].icon
            return Icon ? <Icon size={24} className="text-primary" /> : null
          })()}
        >
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <TrendingDown size={16} className="text-destructive" />
                Impacto Negativo
              </h4>
              <p className="text-muted-foreground">{problems[selectedProblem].impact}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <CheckCircle size={16} className="text-primary" />
                Nossa Solução
              </h4>
              <p className="text-muted-foreground">{problems[selectedProblem].solution}</p>
            </div>
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
              <p className="text-xs text-primary font-medium">
                💡 Dica: {selectedProblem === 0 && "Implemente um CRM e acompanhe métricas semanais de funnel."}
                {selectedProblem === 1 && "Comece medindo CAC e LTV antes de escalar investimentos."}
                {selectedProblem === 2 && "Invista em tráfego pago para criar canais próprios de aquisição."}
                {selectedProblem === 3 && "Crie sequências de email pós-compra e programas de fidelidade."}
                {selectedProblem === 4 && "Mapeie processos repetitivos e automatize um por vez."}
              </p>
            </div>
          </div>
        </FeatureModal>
      )}
    </section>
  )
}
